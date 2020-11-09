import React from "react";
import PropTypes from "prop-types";
import FilmList from "../film-list/film-list";
import ShowMoreButton from "../show-more-button/show-more-button";
import {filmType} from "../../types/film";
import {isShowMoreButton, getVisibleFilms, getFilmsByGenre} from "../../utils";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {FILM_COUNT_STEP} from "../../const";


const FilmListContainer = ({films, onFilmCardClick, visibleFilmsCount, showMoreFilms}) => {
  const showMoreButton = isShowMoreButton(films, visibleFilmsCount);
  const visibleFilms = getVisibleFilms(films, visibleFilmsCount);

  const handleButtonClick = () => {
    showMoreFilms(visibleFilmsCount + FILM_COUNT_STEP);
  };

  return (
    <React.Fragment>
      <FilmList films={visibleFilms} onFilmCardClick={onFilmCardClick} />

      {showMoreButton && <ShowMoreButton onButtonClick={handleButtonClick} />}

    </React.Fragment>
  );
};

FilmListContainer.propTypes = {
  films: PropTypes.arrayOf(filmType).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  visibleFilmsCount: PropTypes.number.isRequired,
  showMoreFilms: PropTypes.func.isRequired,
};

const mapStateToProps = ({films, activeGenre, visibleFilmsCount}) => ({
  films: getFilmsByGenre(films, activeGenre),
  visibleFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms(visibleFilmsCount) {
    dispatch(ActionCreator.showMoreFilms(visibleFilmsCount));
  }
});


export {FilmListContainer};
export default connect(mapStateToProps, mapDispatchToProps)(FilmListContainer);
