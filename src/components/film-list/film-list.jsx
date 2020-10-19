import React from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import {filmType} from '../../types/film';


const FilmList = ({films, onFilmCardClick}) => {

  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} onFilmCardClick={onFilmCardClick} />
      ))}
    </div>
  );

};

FilmList.propTypes = {
  films: PropTypes.arrayOf(filmType).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default FilmList;
