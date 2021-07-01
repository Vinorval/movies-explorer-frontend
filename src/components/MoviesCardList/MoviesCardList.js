import React from "react";
import './MoviesCardList.css';
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, saveMovie, onDelete }) {
    const location = useLocation();
    const [startCard, setSartCard] = React.useState(0);
    const movieCards = movies.slice(0,startCard);
    const movieCheckPath = location.pathname === "/movies" ? movieCards : movies

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
          {movieCheckPath.map((item) => (
          <MoviesCard
            key={item.id}
            id={item.id}
            image={location.pathname === "/movies" ? `https://api.nomoreparties.co${item.image.url}` : item.image}
            name={item.nameRU}
            time={item.duration}
            trailer={location.pathname === "/movies" ? item.trailerLink : item.trailer}
            item={item}
            saveMovie={saveMovie}
            onDelete={onDelete}
          />
        ))}
        </ul>
        <button type="button" onClick={handleMore} className={`
          ${location.pathname === "/movies" ? "movies-list__button" : "movies-list__button-none"}
          ${hideButton() ? "movies-list__button-none" : ""}
        `}>Ещё</button>
        </section>
    )
}

export default MoviesCardList;