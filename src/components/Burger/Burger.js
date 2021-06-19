import './Burger.css';
import { NavLink } from 'react-router-dom';

function Burger({ isBurger, onClose }) {

    return (
        <section className={`burger-box ${!isBurger && 'burger-box_off'}`}>
            <div className="burger">
            <button type="button" className="burger__button" onClick={onClose} />
            <div className="burger__conteiner">
              <div className="burger__links">
                <NavLink activeClassName="burger__link_active" exact to="/" className="burger__link">Главная</NavLink>
                <NavLink activeClassName="burger__link_active" to="/movies" className="burger__link">Фильмы</NavLink>
                <NavLink activeClassName="burger__link_active" to="/saved-movies" className="burger__link">Сохранённые фильмы</NavLink>
              </div>
              <NavLink activeClassName="burger__link_active" to="/profile" className="burger__link burger__link_to_profile">Аккаунт</NavLink>
            </div>
            </div>
        </section>
    )
}

export default Burger;