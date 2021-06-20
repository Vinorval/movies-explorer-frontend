import { Route, Switch } from 'react-router-dom';
import './App.css';
import Profile from '../Profile/Profile';
import Header from '../Header/Header';
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
        <Main />
      </Route>
      <Route path="/movies">
        <Movies isBurger={isBurger} onBurger={handleBurger} />
      </Route>
      <Route path="/saved-movies">
      <SavedMovies isBurger={isBurger} onBurger={handleBurger} />
      </Route>
      <Route path="/profile">
      <Header isBurger={isBurger} onBurger={handleBurger} />
      <Profile
        onEditProfile={handleEdittProfileClick}
        isOpen={isEditProfilePopupOpen}
      />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
