import React from "react";
import './MoviesCard.css';
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
    const location = useLocation();
    const [isbuttonLike, setButtonLike] = React.useState(false);
    const hour = Math.floor(props.time / 60);
    const minutes = props.time % 60;
    console.log(props.item);
    console.log(props.trailer)

    function putOderDeleteLike() {
      //props.setIsPreloader(true)
      if(!isbuttonLike) {
        console.log(true)
        console.log(props.item.id)

        props.saveMovie(props.item)
      } else {
        console.log(false)

        props.onDelete(props.id)
      }
      return setButtonLike(!isbuttonLike)
    }

function deleteMovie() {
  props.onDelete(props.id)
  setButtonLike(!isbuttonLike)
}

    return (
        <li className="movie">
          <a className="movie__link" href={props.trailer}>
            <img
              src={props.image}
              className="movie__image"
              alt={props.name}
            />
          </a>
          <div className="movie__rectangle">
            <h2 className="movie__title">{props.name}</h2>
            <button id='card' type="button" className={location.pathname === "/movies"
              ? isbuttonLike ? 'movie__button movie__button_active': 'movie__button'
              : "movie__none"
            } onClick={putOderDeleteLike}></button>
            <button id='card' type="button" className={location.pathname === "/movies" ? "movie__none" : "movie__delete"} onClick={deleteMovie}></button>
            <p className="movie__time">{`${hour === 0 ? '' : `${hour}ч` } ${minutes === 0 ? '' : `${minutes}мин`}`}</p>
          </div>
        </li>
      );
}

export default MoviesCard;