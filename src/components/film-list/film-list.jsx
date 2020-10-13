import React from 'react';
import FilmCard from '../film-card/film-card';
import PropTypes from 'prop-types';

class FilmList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmId: null,
    };

    this.handleHover = this.handleHover.bind(this);

  }

  handleHover(id) {
    this.state({
      activeFilmId: id,
    });
  }

  render() {
    const {films, onFilmCardClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <FilmCard key={film.id} movie={film} onHover={this.handleHover} onFilmCardClick={onFilmCardClick} />
        ))}
      </div>
    );

  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default FilmList;
