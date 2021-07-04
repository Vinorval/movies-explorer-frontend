import React from "react";
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function Movies({ isBurger, onBurger, movies, saveMovie, onDelete, isPreloader, setIsPreloader }) {
    const [iskeyword, setIsKeyword] = React.useState('');
    const [isShort, setIsShort] = React.useState(false);
    const [isNewArr, setNewArr] = React.useState([]);
    const [isTextSearch, setIsTextSearch] = React.useState(true);
    const [searchSuccessful, setSearchSuccessful] = React.useState(false);

    React.useEffect(() => {
        let localMovies = JSON.parse(localStorage.getItem('movies'));
        if (localMovies === null) {
            localMovies = []
        }
        if (localMovies.length === 0) setIsTextSearch(true);
        else setIsTextSearch(false);
        setNewArr(localMovies);
    }, [])

    React.useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(isNewArr));
    }, [isNewArr])

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
        setIsPreloader(true);
        function findMovies(movie, keyword) {
            return movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
        }

        setIsTextSearch(false);
        setIsPreloader(false);

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
            <SearchForm keyword={iskeyword} iskeyword={handleKeyword} checkbox={handleCheckbox} submit={handleSubmit} newArr={writeNewArr}/>
            <p className={`${!isTextSearch && 'invisable'}`}>Нужно ввести ключевое слово</p>
            <p className={`${!searchSuccessful && 'invisable'}`}>Ничего не найдено</p>
            <MoviesCardList movies={isNewArr} saveMovie={saveMovie} onDelete={onDelete} />
            <Footer />
        </section>
    )
}

export default Movies;