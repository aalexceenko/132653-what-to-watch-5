import React from "react";
import PropTypes from "prop-types";

const ButtonPlayVideo = ({id, handleButtonPlayVideo}) => {

  return (
    <button className="btn btn--play movie-card__button" type="button" onClick={() => handleButtonPlayVideo(id)}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};

ButtonPlayVideo.propTypes = {
  id: PropTypes.number.isRequired,
  handleButtonPlayVideo: PropTypes.func.isRequired,
};


export default ButtonPlayVideo;
