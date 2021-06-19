import './Footer.css'

function Footer() {
    return (
        <section className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer-block">
                <p className="footer-block__year">© 2020</p>
                <div className="footer__links">
                    <p className="footer__link">Яндекс.Практикум</p>
                    <p className="footer__link">Github</p>
                    <p className="footer__link">Facebook</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;
