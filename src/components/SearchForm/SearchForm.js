import React from "react";

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ keyword, iskeyword, checkbox, submit, newArr }) {
    const [isError, setIsError] = React.useState(false);

    function handleChangeMoves(e) {
        iskeyword(e.target.value);
        setIsError(false);
      }

    function handleSubmit(evt) {
        evt.preventDefault();
        if(!keyword) {
            setIsError(true);
        } else {
            newArr([])
            const arrMovies = submit();
            newArr(arrMovies);
        }
    }

    return (
        <section className="searchForm">
            <form className="searchForm__form" noValidate>
                <input placeholder="фильм" className="searchForm__input" required minLength={2} maxLength={40} onChange={handleChangeMoves} />
                <p>{isError && 'Нужно ввести ключевое слово'}</p>
                <button type="submit" className="searchForm__button" onClick={handleSubmit}>найти</button>
            </form>
            <FilterCheckbox checkbox={checkbox} />
        </section>
    )
}

export default SearchForm;