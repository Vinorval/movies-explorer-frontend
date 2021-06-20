import './AboutMe.css'
import photo from '../../images/pic__COLOR_pic.jpg'
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section className="aboutMe section">
            <h2 className="aboutMe__title">Студент</h2>
            <div className="aboutMe__info">
                <img src= {photo} alt="Фотография студента" className="aboutMe__photo" />
                <div className="aboutMe__info-text">
                    <p className="aboutMe__name">Виталий</p>
                    <p className="aboutMe__job">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutMe__text">Я родился и живу в Саратове,
                    закончил факультет экономики СГУ. У меня есть жена и дочь.
                    Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                    С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                    начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                </div>
                <div className="aboutMe__links">
                    <a className="aboutMe__link" href="https://www.facebook.com/vall.limpo">Facebook</a>
                    <a className="aboutMe__link" href="https://github.com/Vinorval">Github</a>
                </div>
            </div>
            <Portfolio />
        </section>
    )
}

export default AboutMe;