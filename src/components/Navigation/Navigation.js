import { Link, useLocation } from "react-router-dom";
import './Navigation.css';
import Burger from "../Burger/Burger";

function Navigation({ isBurger, onBurger, loggedIn }) {
    const location = useLocation();

    return (
      <div className={`navigation ${location.pathname === "/" && !loggedIn ? "" : "novigation_place_movies"}`}>
        {location.pathname === "/" ? (
            <>
            {loggedIn ? (
              <>
              <button className="navigatin__button" onClick={onBurger} />
              <div className="navigation__links">
                <Link to="/movies" className="navigation__link navigation__link_place_main ">Фильмы</Link>
                <Link to="/saved-movies" className="navigation__link navigation__link_place_main">Сохранённые фильмы</Link>
              </div>
              <Link to="/profile" className="navigation__link navigation__link_place_main">Аккаунт</Link>
              <Burger isBurger={isBurger} onClose={onBurger} />
              </>
            ) : (
              <>
                <Link to="/signup" className="navigation__link">
                Регистрация
              </Link>
              <Link to="/signin" className="navigation__link navigation__link_type_login">
                Войти
              </Link>
              </>
            )}
            </>
          ) : (
            <>
              <button className="navigatin__button" onClick={onBurger} />
              <div className="navigation__links">
                <Link to="/movies" className="navigation__link navigation__link_type_movies">Фильмы</Link>
                <Link to="/saved-movies" className="navigation__link navigation__link_type_save-movis">Сохранённые фильмы</Link>
              </div>
              <Link to="/profile" className="navigation__link navigation__link_type_profile">Аккаунт</Link>
              <Burger isBurger={isBurger} onClose={onBurger} />
            </>
          )}
      </div>
    )
}

export default Navigation;