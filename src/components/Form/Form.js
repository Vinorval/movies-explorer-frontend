import './Form.css';
import { Link, useLocation } from "react-router-dom";
import Logo from "../../images/logo.svg";

function Form({
    title,
    firstInput,
    secondInput,
    thirdInput,
    button,
    text,
    textLink,
    link,
    submit,
    isValid,
    formDisablet
}) {
    const location = useLocation();

    return (
        <form onSubmit={submit} className={`form ${location.pathname === '/profile' && 'form_place_profile'}`} noValidate disabled={formDisablet}>
            <div className={`form__haeder ${location.pathname === '/profile' && 'form__haeder_place_profile'}`}>
              <Link className="form__logo" to="/">
                <img src={Logo} alt="логотип" />
              </Link>
              <h2 className="form__title">{title}</h2>
            </div>
            <div className={`form__labels-block ${location.pathname === '/profile' && 'form__labels-block_place_profile'}`}>
                <label className="form__label">
                    <h3 className="form__name-input">{firstInput.title}</h3>
                    <input
                      name={firstInput.name}
                      type="text"
                      className={`form__input ${firstInput.span && 'form__input-error'}`}
                      onChange={firstInput.chahge}
                      value={firstInput.value}
                      minLength={2}
                      required />
                    <span className="form__span">{firstInput.span}</span>
                </label>
                <label className="form__label">
                    <h3 className="form__name-input">{secondInput.title}</h3>
                    <input
                      name={secondInput.name}
                      type={secondInput.type}
                      className={`form__input ${secondInput.span && 'form__input-error'}`}
                      onChange={secondInput.change}
                      value={secondInput.value}
                      minLength={4}
                      required />
                    <span className="form__span">{secondInput.span}</span>
                </label>
                {location.pathname === '/signup' && (
                    <label className="form__label">
                       <h3 className="form__name-input">{thirdInput.title}</h3>
                       <input
                         name={thirdInput.name}
                         type="password"
                         className={`form__input ${thirdInput.span && 'form__input-error'}`}
                         onChange={thirdInput.change}
                         minLength={4}
                         required />
                       <span className="form__span">{thirdInput.span}</span>
                    </label>
                )}
            </div>
            <div className={`form__conteiner 
            ${location.pathname === '/signup' && 'form__conteiner_place_signup'} 
            ${location.pathname === '/profile' && 'form__conteiner_place_profile'}`}>
                <button type="submit" className={`form__button ${!isValid && 'form__button_disablet'}`} disabled={!isValid}>{button}</button>
                <p className="form__text">{text}</p>
                <Link className="form__link" to={link}>{textLink}</Link>
            </div>
        </form>
    )
}

export default Form;