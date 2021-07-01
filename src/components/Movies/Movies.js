import React from "react";
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ isBurger, onBurger, movies, saveMovie, onDelete }) {
    const [iskeyword, setIsKeyword] = React.useState('');
    const [isShort, setIsShort] = React.useState(false);
    const [isNewArr, setNewArr] = React.useState([]);
    const [isTextSearch, setIsTextSearch] = React.useState(true);
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

        setIsTextSearch(false);

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
            <SearchForm keyword={iskeyword} iskeyword={handleKeyword} checkbox={handleCheckbox} submit={handleButton} newArr={writeNewArr}/>
            <p className={`${!isTextSearch && 'invisable'}`}>Нужно ввести ключевое слово</p>
            <MoviesCardList movies={isNewArr} saveMovie={saveMovie} onDelete={onDelete} />
            <Footer />
        </section>
    )
}

export default Movies;