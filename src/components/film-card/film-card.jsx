import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmType} from '../../types/film';
import VideoPlayer from '../video-player/video-player';
import withFilmCard from "../../hocs/with-film-card/with-film-card";


const FilmCard = ({film, onFilmCardClick, isVideo, handleMouseEnter, handleMouseLeave, playVideo}) => {
  const {title, previewImage, previewVideo, id} = film;


  return (
    <article className="small-movie-card catalog__movies-card"
      onClick={() => onFilmCardClick(id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          previewVideo={previewVideo}
          preview={previewImage}
          title={title}
          isVideo={isVideo}
          playVideo={playVideo}
        />
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
  isVideo: PropTypes.bool.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  playVideo: PropTypes.func.isRequired,
};

export default withFilmCard(FilmCard);
