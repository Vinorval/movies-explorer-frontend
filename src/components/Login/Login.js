import React from "react";
import './Login.css';
import Form from '../Form/Form';

function Login({ onLogin }) {
    //создание переменных состояния, отвечающие за инпуты
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleChangeEmail(e) {
      setEmail(e.target.value);
    }

    function handleChangePassword(e) {
      setPassword(e.target.value);
    }

    function handleSubmit(evt) {
      evt.preventDefault();

      //отправка данных с инпутов в функцию с запросом на сервер для регистрации
      onLogin(email, password);
    }

    return (
        <section className="login">
            <Form
              title='Рады видеть!'
              firstInput='E-mail'
              secondInput='Пароль'
              button='Войти'
              text='Ещё не зарегистрированы?'
              textLink='Регистрация'
              link='/signup'
              changeFirstInput={handleChangeEmail}
              changeSecondInput={handleChangePassword}
              submit={handleSubmit}
            />
        </section>
    )
}

export default Login;