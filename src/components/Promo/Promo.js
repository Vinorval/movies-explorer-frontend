import './Promo.css';
import image from '../../images/profile-logo.svg';

function Promo () {
    return (
        <section className="promo section">
            <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={image} alt="картинка с кругами" className="promo__image" />
        </section>
    )
}

export default Promo;