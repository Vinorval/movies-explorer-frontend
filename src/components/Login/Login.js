import React from "react";
import './Login.css';
import Form from '../Form/Form';
import useFormWithValidation from "../../utils/useFormWithValidation";

function Login({ onLogin }) {
    //создание переменных состояния, отвечающие за инпуты
    const [isRegistrationError, setIsRegistrationError] = React.useState('');
    const [formDisablet, setFormDisablet] = React.useState(false);
    const [values, handleChange, errors, isValid] = useFormWithValidation();
    const secondInput = { title: 'Пароль', span: errors.password, name: "password", change: handleChange, type: 'password' };
    const firstInput = { title: 'E-mail', span: errors.email, name: "email", change: handleChange };

    function handleSubmit(evt) {
      evt.preventDefault();

      setFormDisablet(true);
      setIsRegistrationError(false);

      //отправка данных с инпутов в функцию с запросом на сервер для регистрации
      onLogin(values.email, values.password);
    }

    return (
        <section className="login">
            <Form
              title='Рады видеть!'
              firstInput={firstInput}
              secondInput={secondInput}
              button='Войти'
              text='Ещё не зарегистрированы?'
              textLink='Регистрация'
              link='/signup'
              submit={handleSubmit}
              isValid={isValid}
              isRegistrationError={isRegistrationError}
              formDisablet={formDisablet}
            />
        </section>
    )
}

export default Login;