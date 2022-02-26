import React from "react";
import './EditProfilePopup.css';
import Form from '../Form/Form';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormWithValidation from "../../utils/useFormWithValidation";

function EditProfilePopup({ isOpen, onCloseButton, onUpdateUser }) {
    //создание контекста о пользователе
    const currentUser = React.useContext(CurrentUserContext);
    const [formDisablet, setFormDisablet] = React.useState(false);
    const [values, handleChange, errors, isValid] = useFormWithValidation({ name: currentUser.name, email: currentUser.email});

    //события при сохранении новой информации о пользователе
    function handleSubmit(e) {
      e.preventDefault();

      setFormDisablet(true);

      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({
        name: values.name,
        email: values.email,
      });
    }

    return (
        <section className={`popup-profile ${!isOpen && 'popup-profile_close'}`}>
            <div className="popup-profile__conteiner">
            <button type="button" className="popup-profile__button" onClick={onCloseButton}></button>
            <Form
              title='Редактировать'
              firstInput='Имя'
              secondInput='E-mail'
              button='Сохранить'
              text='Передумали?'
              textLink='K фильмам'
              link='/movies'
              spanFirstInput={errors.name}
              spanSecondInput={errors.email}
              changeFirstInput={handleChange}
              changeSecondInput={handleChange}
              nameFirstInput='name'
              nameSecondInput='email'
              typeSecondInput='email'
              submit={handleSubmit}
              valueFirstInput={values.name || ''}
              valueSecondInput={values.email || ''}
              isValid={isValid}
              formDisablet={formDisablet}
            />
            </div>
        </section>
    )
}

export default EditProfilePopup;