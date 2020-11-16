import React from "react";
import PropTypes from "prop-types";
import {getFormattedTime} from "../../utils";


const Player = ({
  isPlaying,
  videoCurrentTime,
  progressPosition,
  title,
  children,
  handlePlayerExitClick,
  handlePlayerFullScreenClick,
  handlePlayerPlayClick,
  handlePlayerPauseClick,
}) => {

  const styleLeft = {left: `${progressPosition}%`};

  return (
    <div className="player">
      {children}

      <button type="button" className="player__exit" onClick={handlePlayerExitClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={`${progressPosition}`} max="100"></progress>
            <div className="player__toggler" style={styleLeft}>Toggler</div>
          </div>
          <div className="player__time-value">{getFormattedTime(videoCurrentTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={isPlaying ? handlePlayerPauseClick : handlePlayerPlayClick}>
            {!isPlaying && (
              <React.Fragment>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </React.Fragment>
            )}
            {isPlaying && (
              <React.Fragment>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause" />
                </svg>
                <span>Pause</span>
              </React.Fragment>
            )}
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={handlePlayerFullScreenClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );

};

Player.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  videoCurrentTime: PropTypes.number.isRequired,
  progressPosition: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  handlePlayerExitClick: PropTypes.func.isRequired,
  handlePlayerFullScreenClick: PropTypes.func.isRequired,
  handlePlayerPlayClick: PropTypes.func.isRequired,
  handlePlayerPauseClick: PropTypes.func.isRequired,
};

export default Player;
