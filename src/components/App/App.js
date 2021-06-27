import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import auth from '../../utils/auth';
import mainApi from '../../utils/MainApi';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Login from '../Login/Login';
import Register from '../Register/Register';
import React from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isBurger, setIsBurger] = React.useState(false);

  const [currentUser, setCurrentUser] = React.useState({});

  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);

    //выполняем запрос на сервер для проверки токена пользователя
    React.useEffect(() => {
      //взятие статуса токена из локального хранилища
      const token = localStorage.getItem("token");
      if (token) {
        auth
          .checkToken(token)
          .then((res) => {
            setLoggedIn(true);
            //даём доступ к оснавной странице
            history.push("/movies");
            //возвращаем данные пользователя из базы данных
            mainApi.getProfileInfo(token).then((result) => {
              //выполняем запись полученных данных в переменную состояния
              setCurrentUser(result);
            });
          })
          .catch((err) => {
            alert(err);
            localStorage.removeItem("token");
          });
      }
    }, [history]);

  //регестрируем нового пользователя
  function registerUser(name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        enterUser(email, password);
      })
      .catch((err) => {
        console.log(err)
      });
  }

    //выполняем вход пользователя
    function enterUser(email, password) {
      auth
        .login(email, password)
        .then((res) => {
          if (res.token) {
            localStorage.setItem("token", res.token);
            setLoggedIn(true);
            history.push("/movies");
            mainApi.getProfileInfo(res.token).then((result) => {
              //выполняем запись полученных данных в переменную состояния
              setCurrentUser(result);
              });
          }
        })
        .catch((err) => {
          alert(err);
        });
  }

  //выполняем выход пользователя с удалением токена из локального хранилища
  function signOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
  }

  function handleUpdateUser(data) {
    const token = localStorage.getItem("token");
    //выполняем запрос на сервер для отпраки новой информации о пользователе
    mainApi
      .putProfileInfo(data, token)
      .then((result) => {
        //выполняем запись полученных данных в переменную состояния
        setCurrentUser(result);
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function handleEdittProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleBurger() {
    setIsBurger(!isBurger);
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
      <Switch>
      <Route exact path="/">
        <Main loggedIn={loggedIn} />
      </Route>
      <ProtectedRoute
        path="/movies"
        loggedIn={loggedIn}
        component={Movies}
        isBurger={isBurger}
        onBurger={handleBurger}
      />
      <ProtectedRoute
        path="/saved-movies"
        loggedIn={loggedIn}
        component={SavedMovies}
        isBurger={isBurger}
        onBurger={handleBurger} />
      <ProtectedRoute
        path="/profile"
        loggedIn={loggedIn}
        component={Profile}
        isBurger={isBurger}
        onBurger={handleBurger}
        onEditProfile={handleEdittProfileClick}
        onUpdateUser={handleUpdateUser}
        isOpen={isEditProfilePopupOpen}
        signOut={signOut} />
      <Route path="/signin">
        <Login onLogin={enterUser} />
      </Route>
      <Route path="/signup">
        <Register onRegister={registerUser} />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
      </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
