import React from "react";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ isBurger, onBurger, movies, onDelete }) {
    const [iskeyword, setIsKeyword] = React.useState('');
    const [isShort, setIsShort] = React.useState(false);
    const [isNewArr, setNewArr] = React.useState(movies);
    const [searchSuccessful, setSearchSuccessful] = React.useState(false);

    function handleCheckbox(boolean) {
        setIsShort(boolean)
    }

    function handleKeyword(key) {
        setIsKeyword(key)
    }

    function writeNewArr(newArr) {
        setNewArr(newArr)
    }

    function handleButton() {
        function findMovies(movie, keyword) {
            return movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
        }

        return movies.filter((movie) => {
            if(isShort) {
                return findMovies(movie, iskeyword) && movie.duration < 41;
            } else {
                return findMovies(movie, iskeyword);
            }
        })
    }

    function handleSubmit() {
        const arrMovies = handleButton();

        if( arrMovies.length === 0 ) {
            setSearchSuccessful(true);
        } else {
            setSearchSuccessful(false);
        }

        return arrMovies
    }

    return(
        <section>
            <Header isBurger={isBurger} onBurger={onBurger} />
            <SearchForm keyword={iskeyword} iskeyword={handleKeyword} checkbox={handleCheckbox} submit={handleSubmit} newArr={writeNewArr} />
            <p className={`${!searchSuccessful && 'invisable'}`}>Ничего не найдено</p>
            <MoviesCardList movies={isNewArr} onDelete={onDelete} />
            <Footer />
        </section>
    )
}

export default SavedMovies;