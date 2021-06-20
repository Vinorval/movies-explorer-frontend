import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <section className="searchForm">
            <div className="searchForm__form">
                <input placeholder="фильм" className="searchForm__input" />
                <button type="submit" className="searchForm__button">найти</button>
            </div>
            <FilterCheckbox />
        </section>
    )
}

export default SearchForm;