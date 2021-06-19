import './Register.css';
import Form from '../Form/Form';

function Register() {
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
            />
        </section>
    )
}

export default Register;