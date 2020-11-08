import React from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';
import {filmType} from '../../types/film';
import {connect} from 'react-redux';
import {getFilmsByGenre} from "../../utils";


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

const mapStateToProps = (state) => {
  return ({
    films: getFilmsByGenre(state.films, state.activeGenre),
  });
};


export {FilmList};
export default connect(mapStateToProps)(FilmList);


