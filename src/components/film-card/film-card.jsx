import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const FilmCard = (props) => {
  const {film, onFilmCardClick} = props;
  const {title, previewImage, id} = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onClick={() => onFilmCardClick(id)}>
      <div className="small-movie-card__image">
        <img src={previewImage} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
      </h3>
    </article>
  );

};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    previewVideo: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.array.isRequired,
    rating: PropTypes.string.isRequired,
    ratingText: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.array.isRequired,
    runtime: PropTypes.number.isRequired,
    myList: PropTypes.bool.isRequired,
  }).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default FilmCard;
