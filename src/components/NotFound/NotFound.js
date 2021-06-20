import './NotFound.css';
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="notFound">
            <div className="notFound__text">
                <h2 className="notFound__title">404</h2>
                <p className="notFound__subtitle">Страница не найдена</p>
            </div>
            <Link to="/" className="notFound__link">Назад</Link>
        </section>
    )
}

export default NotFound;