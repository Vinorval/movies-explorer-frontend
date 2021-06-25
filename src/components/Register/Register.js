import React from "react";
import './Register.css';
import Form from '../Form/Form';

function Register({ onRegister }) {

    //создание переменных состояния, отвечающие за инпуты
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleChangeName(e) {
        setName(e.target.value);
      }

    function handleChangeEmail(e) {
      setEmail(e.target.value);
    }

    function handleChangePassword(e) {
      setPassword(e.target.value);
    }

    function handleSubmit(evt) {
      evt.preventDefault();

      //отправка данных с инпутов в функцию с запросом на сервер для регистрации
      onRegister( name, email, password );
    }

    return (
        <section className="register">
            <Form
              title='Добро пожаловать!'
              firstInput='Имя'
              secondInput='E-mail'
              thirdInput='Пароль'
              button='Зарегистрироваться'
              text='Уже зарегистрированы?'
              textLink='Войти'
              link='/signin'
              span='Что-то пошло не так...'
              changeFirstInput={handleChangeName}
              changeSecondInput={handleChangeEmail}
              changeThirdInput={handleChangePassword}
              submit={handleSubmit}
            />
        </section>
    )
}

export default Register;