import React from "react";
import './Profile.css';
import { Link } from "react-router-dom";
import CurrentUserContext from '../../contexts/CurrentUserContext';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import Header from '../Header/Header';

function Profile({ onEditProfile, isOpen, isBurger, onBurger, signOut, onUpdateUser }) {
     //запись контекста с информацией о пользователе в переменную
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <section className="profile section">
            <Header isBurger={isBurger} onBurger={onBurger} />
            <h2 className="profile__title">{`Привет, ${currentUser.name}`}</h2>
            <div className="profile__info">
                <p className="profile__name-info">Имя</p>
                <p className="profile__user-info">{currentUser.name}</p>
                <div className="profile__line"></div>
                <p className="profile__name-info">E-mail</p>
                <p className="profile__user-info">{currentUser.email}</p>
            </div>
            <div className="profile__edit">
                <button type="button" className="profile__button-edit" onClick={onEditProfile}>Редактировать</button>
                <Link to="/" className="profile__link" onClick={signOut}>Выйти из аккаунта</Link>
            </div>
            <EditProfilePopup
              isOpen={isOpen}
              onCloseButton={onEditProfile}
              onUpdateUser={onUpdateUser}
            />
        </section>
    )
}

export default Profile;
