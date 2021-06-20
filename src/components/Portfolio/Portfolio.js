import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://vinorval.github.io/how-to-learn">Статичный сайт</a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://vinorval.github.io/russian-travel/index.html">Адаптивный сайт</a>
                </li>
                <li className="portfolio__item">
                    <a className="portfolio__link" href="https://github.com/Vinorval/react-mesto-api-full">Одностраничное приложение</a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;
