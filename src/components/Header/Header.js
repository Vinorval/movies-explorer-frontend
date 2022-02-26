import './Header.css';
import Logo from "../../images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Navigation from '../Navigation/Navigation';

function Header({ isBurger, onBurger, loggedIn }) {
    const location = useLocation();

    return (
        <section className={`header ${location.pathname === "/" && 'header_place_landing'}`}>
            <Link to="/">
              <img src={Logo} alt="логотип" className="header__logo" />
            </Link>
            <Navigation isBurger={isBurger} onBurger={onBurger} loggedIn={loggedIn} />
        </section>
    )
}

export default Header;