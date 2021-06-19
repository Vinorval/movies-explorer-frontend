import './Login.css';
import Form from '../Form/Form';

function Login() {
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
            />
        </section>
    )
}

export default Login;