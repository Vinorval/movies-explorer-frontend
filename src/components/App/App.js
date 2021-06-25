import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import auth from '../../utils/auth';
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
  const [userEmail, setUserEmail] = React.useState("");

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
            setUserEmail(res.email);
            setLoggedIn(true);
            //даём доступ к оснавной странице
            history.push("/movies");
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
        history.push("/signin");
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
            setUserEmail(email);
            localStorage.setItem("token", res.token);
            setLoggedIn(true);
            history.push("/movies");
          }
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
        isOpen={isEditProfilePopupOpen} />
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
    </div>
  );
}

export default App;
