import React, {createRef} from "react";
import PropTypes from "prop-types";
import {filmType} from '../../types/film';
import {getVideoProgress} from "../../utils";


const withPlayer = (Component) => {
  class WithPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = createRef();

      this.state = {
        isPlaying: true,
        videoCurrentTime: 0,
        progressPosition: 0,
      };

      this._handlePlayerFullScreenClick = this._handlePlayerFullScreenClick.bind(this);
      this._handlePlayerPlayClick = this._handlePlayerPlayClick.bind(this);
      this._handlePlayerPauseClick = this._handlePlayerPauseClick.bind(this);
      this._handleVideoTimeUpdate = this._handleVideoTimeUpdate.bind(this);
    }

    _handlePlayerFullScreenClick() {
      const video = this._videoRef.current;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }
    }

    _handlePlayerPlayClick() {
      this.setState({
        isPlaying: true,
      });
    }

    _handlePlayerPauseClick() {
      this.setState({
        isPlaying: false,
      });
    }

    componentDidMount() {
      const {films, match} = this.props;
      const video = this._videoRef.current;
      const id = Number(match.params.id);
      const currentFilm = films.find((film) => film.id === id);

      if (!video) {
        return;
      }

      video.src = currentFilm.trailer;

      this.setState({
        videoCurrentTime: video.currentTime,
        progressPosition: getVideoProgress(video),
      });

      if (this.state.isPlaying) {
        video.play();
      }
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }

    _handleVideoTimeUpdate() {
      const video = this._videoRef.current;

      this.setState({
        videoCurrentTime: video.currentTime,
        progressPosition: getVideoProgress(video),
      });

    }

    render() {
      const {films, match, handlePlayerExitClick} = this.props;
      const id = Number(match.params.id);

      const currentFilm = films.find((film) => film.id === id);

      const {isPlaying, videoCurrentTime, progressPosition} = this.state;

      return (
        <Component
          {...this.props}
          isPlaying={isPlaying}
          videoCurrentTime={videoCurrentTime}
          progressPosition={progressPosition}
          title={currentFilm.title}
          handlePlayerExitClick={handlePlayerExitClick}
          handlePlayerFullScreenClick={this._handlePlayerFullScreenClick}
          handlePlayerPlayClick={this._handlePlayerPlayClick}
          handlePlayerPauseClick={this._handlePlayerPauseClick}
        >
          <video
            ref={this._videoRef}
            className="player__video"
            onTimeUpdate={this._handleVideoTimeUpdate}
            poster={currentFilm.poster}
            muted
          />
        </Component>
      );
    }

  }

  WithPlayer.propTypes = {
    films: PropTypes.arrayOf(filmType).isRequired,
    match: PropTypes.object.isRequired,
    handlePlayerExitClick: PropTypes.func.isRequired,
  };

  return WithPlayer;
};

export default withPlayer;
