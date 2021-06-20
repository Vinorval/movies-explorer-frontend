import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
    const location = useLocation();

    return (
        <li className="movie">
          <img
            src={props.image}
            className="movie__image"
            alt={props.name}
          />
          <div className="movie__rectangle">
            <h2 className="movie__title">{props.name}</h2>
            <button type="button" className={location.pathname === "/movies" ? "movie__button" : "movie__delete"}></button>
            <p className="movie__time">{props.time}</p>
          </div>
        </li>
      );
}

export default MoviesCard;