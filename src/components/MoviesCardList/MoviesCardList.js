import './MoviesCardList.css';
import { useLocation } from "react-router-dom";
import MoviesCard from '../MoviesCard/MoviesCard';
import { movies } from '../../utils/utils';

function MoviesCardList() {
    const location = useLocation();

    return (
        <section className="movies">
        <ul className="movies-list">
          {movies.map((item) => (
            <MoviesCard
              key={item._id}
              image={item.image}
              name={item.name}
              time={item.time}
            />
          ))}
        </ul>
        <button type="button" className={location.pathname === "/movies" ? "movies-list__button" : "movies-list__button-none"}>Ещё</button>
        </section>
    )
}

export default MoviesCardList;