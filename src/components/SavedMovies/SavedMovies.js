import React from "react";
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies({ isBurger, onBurger, movies, onDelete }) {
    const [iskeyword, setIsKeyword] = React.useState('');
    const [isShort, setIsShort] = React.useState(false);
    const [isNewArr, setNewArr] = React.useState(movies);
    
    console.log(movies)
    console.log(isNewArr);

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

    return(
        <section>
            <Header isBurger={isBurger} onBurger={onBurger} />
            <SearchForm iskeyword={handleKeyword} checkbox={handleCheckbox} submit={handleButton} newArr={writeNewArr} />
            <MoviesCardList movies={isNewArr} onDelete={onDelete} />
            <Footer />
        </section>
    )
}

export default SavedMovies;