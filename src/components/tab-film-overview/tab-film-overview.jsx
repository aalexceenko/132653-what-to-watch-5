import React from "react";
import PropTypes from "prop-types";


const TabFilmOverview = ({description, rating, ratingText, director, votes, actors}) => {


  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating} </div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingText} </span>
          <span className="movie-rating__count">{votes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description.join(` `)}</p>

        <p className="movie-card__director"><strong>Director: {director} </strong></p>

        <p className="movie-card__starring"><strong>Starring: {actors.join(`, `)} </strong></p>
      </div>
    </React.Fragment>
  );
};

TabFilmOverview.propTypes = {
  description: PropTypes.array.isRequired,
  rating: PropTypes.string.isRequired,
  ratingText: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.array.isRequired,
};

export default TabFilmOverview;
