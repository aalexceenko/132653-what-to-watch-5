import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmType} from '../../types/film';


const FilmCard = ({film, onFilmCardClick}) => {
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
  film: filmType,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default FilmCard;
