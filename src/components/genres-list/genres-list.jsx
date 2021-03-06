import React from 'react';
import PropTypes from 'prop-types';
import {getGenres} from "../../utils";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const GenresList = ({activeGenre, genres, changeActiveGenre}) => {

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => (
        <li className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`} key={i}>
          <a className="catalog__genres-link"
            onClick={() => {
              changeActiveGenre(genre);
            }}>{genre}</a>
        </li>
      ))}

    </ul>
  );

};

GenresList.propTypes = {
  changeActiveGenre: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

const mapStateToProps = ({APP_PROCESS}) => {
  return ({
    activeGenre: APP_PROCESS.activeGenre,
    genres: getGenres(APP_PROCESS.films),
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveGenre(newGenre) {
    dispatch(ActionCreator.changeActiveGenre(newGenre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
