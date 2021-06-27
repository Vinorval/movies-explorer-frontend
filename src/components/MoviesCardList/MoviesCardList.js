import React from "react";
import './MoviesCardList.css';
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';
import { movies } from '../../utils/utils';

function MoviesCardList() {
    const location = useLocation();
    const [startCard, setSartCard] = React.useState(0);
    const movieCards = movies.slice(0,startCard);

    function showsnumberList() {
      if( window.innerWidth < 768 ) {
        return setSartCard(5)
      } if (window.innerWidth >= 768 && window.innerWidth <= 1160) {
        return setSartCard(8)
      } if (window.innerWidth > 1160) {
        return setSartCard(12)
      }
    }

    React.useEffect(() => {
      showsnumberList()
    }, [])

    function handleMore() {
      if( window.innerWidth < 768 ) {
        return setSartCard(startCard + 1)
      } if (window.innerWidth >= 768 && window.innerWidth <= 1160) {
        return setSartCard(startCard + 2)
      } if (window.innerWidth > 1160) {
        return setSartCard(startCard + 4)
      }
    }

    function hideButton() {
      if (movieCards.length === movies.length) {
        return true
      } else {
        return false
      }
    }

    return (
        <section className="movies">
        <ul className="movies-list">
          {movieCards.map((item) => (
          <MoviesCard
            key={item._id}
            image={item.image}
            name={item.name}
            time={item.time}
          />
        ))}
        </ul>
        <button type="button" onClick={handleMore} className={`
        ${location.pathname === "/movies" ? "movies-list__button" : "movies-list__button-none"}
        ${hideButton() ? "movies-list__button-none" : ""}`}>Ещё</button>
        </section>
    )
}

export default MoviesCardList;