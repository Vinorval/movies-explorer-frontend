import './Form.css';
import { Link, useLocation } from "react-router-dom";
import Logo from "../../images/logo.svg";

function Form({ title, firstInput, secondInput, thirdInput, button, text, textLink, link, span, changeFirstInput, changeSecondInput, changeThirdInput, submit }) {
    const location = useLocation();

    return (
        <form onSubmit={submit} className={`form ${location.pathname === '/profile' && 'form_place_profile'}`}>
            <div className={`form__haeder ${location.pathname === '/profile' && 'form__haeder_place_profile'}`}>
              <Link className="form__logo" to="/">
                <img src={Logo} alt="логотип" />
              </Link>
              <h2 className="form__title">{title}</h2>
            </div>
            <div className={`form__labels-block ${location.pathname === '/profile' && 'form__labels-block_place_profile'}`}>
                <label className="form__label">
                    <h3 className="form__name-input">{firstInput}</h3>
                    <input type="text" className="form__input" onChange={changeFirstInput} />
                    <span className="form__span">{span}</span>
                </label>
                <label className="form__label">
                    <h3 className="form__name-input">{secondInput}</h3>
                    <input type="text" className="form__input" onChange={changeSecondInput} />
                    <span className="form__span">{span}</span>
                </label>
                {location.pathname === '/signup' && (
                    <label className="form__label">
                       <h3 className="form__name-input">{thirdInput}</h3>
                       <input type="password" className="form__input form__input-error" onChange={changeThirdInput} />
                       <span className="form__span">{span}</span>
                    </label>
                )}
            </div>
            <div className={`form__conteiner 
            ${location.pathname === '/signup' && 'form__conteiner_place_signup'} 
            ${location.pathname === '/profile' && 'form__conteiner_place_profile'}`}>
                <button type="submit" className="form__button">{button}</button>
                <p className="form__text">{text}</p>
                <Link className="form__link" to={link}>{textLink}</Link>
            </div>
        </form>
    )
}

export default Form;