import React from "react";
import './Register.css';
import Form from '../Form/Form';
import useFormWithValidation from "../../utils/useFormWithValidation";

function Register({ onRegister }) {

    //создание переменных состояния, отвечающие за инпуты
    const [isRegistrationError, setIsRegistrationError] = React.useState('');
    const [formDisablet, setFormDisablet] = React.useState(false);
    const [values, handleChange, errors, isValid] = useFormWithValidation();

    function handleSubmit(evt) {
      evt.preventDefault();

      setFormDisablet(true);
      setIsRegistrationError(false);

      //отправка данных с инпутов в функцию с запросом на сервер для регистрации
      onRegister( values.name, values.email, values.password )
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
              spanFirstInput={errors.name}
              spanSecondInput={errors.email}
              spanThirdInput={errors.password}
              changeFirstInput={handleChange}
              changeSecondInput={handleChange}
              changeThirdInput={handleChange}
              nameFirstInput='name'
              nameSecondInput='email'
              nameThirdInput='password'
              typeSecondInput='email'
              submit={handleSubmit}
              isValid={isValid}
              isRegistrationError={isRegistrationError}
              formDisablet={formDisablet}
            />
        </section>
    )
}

export default Register;