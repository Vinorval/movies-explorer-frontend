import React from "react";
import './Register.css';
import Form from '../Form/Form';
import useFormWithValidation from "../../utils/useFormWithValidation";

function Register({ onRegister }) {

    //создание переменных состояния, отвечающие за инпуты
    const [formDisablet, setFormDisablet] = React.useState(false);
    const [values, handleChange, errors, isValid] = useFormWithValidation();
    const thirdInput = { title: 'Пароль', span: errors.password, name: "password", change: handleChange };
    const secondInput = { title: 'E-mail', span: errors.email, name: "email", change: handleChange, type: 'email' };
    const firstInput = { title: 'Имя', span: errors.name, name: "name", change: handleChange };

    function handleSubmit(evt) {
      evt.preventDefault();

      setFormDisablet(true);

      //отправка данных с инпутов в функцию с запросом на сервер для регистрации
      onRegister( values.name, values.email, values.password )
    }

    return (
        <section className="register">
            <Form
              title='Добро пожаловать!'
              firstInput={firstInput}
              secondInput={secondInput}
              thirdInput={thirdInput}
              button='Зарегистрироваться'
              text='Уже зарегистрированы?'
              textLink='Войти'
              link='/signin'
              submit={handleSubmit}
              isValid={isValid}
              formDisablet={formDisablet}
            />
        </section>
    )
}

export default Register;