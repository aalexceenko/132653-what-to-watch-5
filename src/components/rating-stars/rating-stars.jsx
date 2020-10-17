import React from 'react';
import PropTypes from 'prop-types';


const RatingStars = ({index, starCheck, onStarClick}) => {


  return (
    <React.Fragment>
      <input className="rating__input" id={`star-${index}`} type="radio" name="rating"
        value={index} checked={starCheck} onChange={(event) => onStarClick(event.target.checked)}/>
      <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
    </React.Fragment>
  );
};

RatingStars.propTypes = {
  index: PropTypes.number.isRequired,
  starCheck: PropTypes.bool.isRequired,
  onStarClick: PropTypes.func.isRequired,
};


export default RatingStars;
