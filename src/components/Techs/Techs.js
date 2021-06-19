import './Techs.css'

function Techs() {
    return (
        <section className="tech section">
            <h2 className="tech__title">Технологии</h2>
            <h3 className="tech__subtitle">7 технологий</h3>
            <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs-items">
                <li className="techs-items__item">HTML</li>
                <li className="techs-items__item">CSS</li>
                <li className="techs-items__item">JS</li>
                <li className="techs-items__item">React</li>
                <li className="techs-items__item">Git</li>
                <li className="techs-items__item">Express.js</li>
                <li className="techs-items__item">mongoDB</li>
            </ul>
        </section>
    )
}

export default Techs;