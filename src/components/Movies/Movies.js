import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ isBurger, onBurger }) {
    return(
        <section>
            <Header isBurger={isBurger} onBurger={onBurger} />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </section>
    )
}

export default Movies;