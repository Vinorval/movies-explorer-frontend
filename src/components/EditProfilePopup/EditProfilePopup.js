import './EditProfilePopup.css';
import Form from '../Form/Form';

function EditProfilePopup({ isOpen, onCloseButton }) {
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
            />
            </div>
        </section>
    )
}

export default EditProfilePopup;