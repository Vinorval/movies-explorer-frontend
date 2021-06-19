import './Profile.css';
import { Link } from "react-router-dom";
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';

function Profile({ onEditProfile, isOpen }) {
    return (
        <section className="profile section">
            <h2 className="profile__title">Привет, Виталий!</h2>
            <div className="profile__info">
                <p className="profile__name-info">Имя</p>
                <p className="profile__user-info">Виталий</p>
                <div className="profile__line"></div>
                <p className="profile__name-info">E-mail</p>
                <p className="profile__user-info">pochta@yandex.ru</p>
            </div>
            <div className="profile__edit">
                <button type="button" className="profile__button-edit" onClick={onEditProfile}>Редактировать</button>
                <Link to="/" className="profile__link">Выйти из аккаунта</Link>
            </div>
            <EditProfilePopup
              isOpen={isOpen}
              onCloseButton={onEditProfile}
            />
        </section>
    )
}

export default Profile;
