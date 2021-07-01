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
    spanFirstInput,
    spanSecondInput,
    spanThirdInput,
    changeFirstInput,
    changeSecondInput,
    changeThirdInput,
    nameFirstInput,
    nameSecondInput,
    nameThirdInput,
    submit,
    valueFirstInput,
    valueSecondInput,
    typeSecondInput,
    isValid,
    isRegistrationError,
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
                    <h3 className="form__name-input">{firstInput}</h3>
                    <input
                      name={nameFirstInput}
                      type="text"
                      className={`form__input ${spanFirstInput && 'form__input-error'}`}
                      onChange={changeFirstInput}
                      value={valueFirstInput}
                      minLength={2}
                      required />
                    <span className="form__span">{spanFirstInput}</span>
                </label>
                <label className="form__label">
                    <h3 className="form__name-input">{secondInput}</h3>
                    <input
                      name={nameSecondInput}
                      type={typeSecondInput}
                      className={`form__input ${spanSecondInput && 'form__input-error'}`}
                      onChange={changeSecondInput}
                      value={valueSecondInput}
                      minLength={4}
                      required />
                    <span className="form__span">{spanSecondInput}</span>
                </label>
                {location.pathname === '/signup' && (
                    <label className="form__label">
                       <h3 className="form__name-input">{thirdInput}</h3>
                       <input
                         name={nameThirdInput}
                         type="password"
                         className={`form__input ${spanThirdInput && 'form__input-error'}`}
                         onChange={changeThirdInput}
                         minLength={4}
                         required />
                       <span className="form__span">{spanThirdInput}</span>
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