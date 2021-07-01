import React from "react";
import './Login.css';
import Form from '../Form/Form';
import useFormWithValidation from "../../utils/useFormWithValidation";

function Login({ onLogin }) {
    //создание переменных состояния, отвечающие за инпуты
    const [isRegistrationError, setIsRegistrationError] = React.useState('');
    const [formDisablet, setFormDisablet] = React.useState(false);
    const [values, handleChange, errors, isValid] = useFormWithValidation();

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
              firstInput='E-mail'
              secondInput='Пароль'
              button='Войти'
              text='Ещё не зарегистрированы?'
              textLink='Регистрация'
              link='/signup'
              spanFirstInput={errors.email}
              spanSecondInput={errors.password}
              changeFirstInput={handleChange}
              changeSecondInput={handleChange}
              nameFirstInput='email'
              nameSecondInput='password'
              typeSecondInput='password'
              submit={handleSubmit}
              isValid={isValid}
              isRegistrationError={isRegistrationError}
              formDisablet={formDisablet}
            />
        </section>
    )
}

export default Login;