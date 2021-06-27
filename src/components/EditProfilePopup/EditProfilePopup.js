import React from "react";
import './EditProfilePopup.css';
import Form from '../Form/Form';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onCloseButton, onUpdateUser }) {
    //создание переменных состояния для хранения имени и информации о пользователе
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    //создание контекста о пользователе
    const currentUser = React.useContext(CurrentUserContext);

    //изменение имени, в зависимости от значения инпута
    function handleChangeName(event) {
      setName(event.target.value);
    }

    //изменение информации о пользователе, в зависимости от значения инпута
    function handleChangeEmail(event) {
      setEmail(event.target.value);
    }

    React.useEffect(() => {
      // запись имени и информации о пользователе из контекста
      setName(currentUser.name);
      setEmail(currentUser.email);
    }, [currentUser]);

    //события при сохранении новой информации о пользователе
    function handleSubmit(e) {
      e.preventDefault();

      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({
        name,
        email,
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
              changeFirstInput={handleChangeName}
              changeSecondInput={handleChangeEmail}
              submit={handleSubmit}
              valueFirstInput={name || ''}
              valueSecondInput={email || ''}
            />
            </div>
        </section>
    )
}

export default EditProfilePopup;