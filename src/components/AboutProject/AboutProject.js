import './AboutProject.css';

function AboutProject () {
    return (
        <section className="about-project section">
            <h2 className="about-project__title">О проекте</h2>
            <div className="about-proect__block">
                <div className="about-proect__block-text">
                  <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
                  <p className="about-project__text">Составление плана, работу над бэкендом,
                    вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-proect__block-text">
                  <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
                  <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн,
                    которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__schema">
                <p className="about-part__part about-project__part_type_backend">1 неделя</p>
                <p className="about-part__part about-project__part_type_frontend">4 недели</p>
                <p className="about-part__name about-project__name_type_backend">Back-end</p>
                <p className="about-part__name about-project__name_type_backend">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;
