import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmType} from '../../types/film';
import VideoPlayer from '../video-player/video-player';


class FilmCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideo: false,
    };

    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
    this._playVideo = this._playVideo.bind(this);
  }

  _handleMouseEnter() {
    this.setState({isVideo: true});
  }

  _handleMouseLeave() {
    this.setState({isVideo: false});
    this._stopVideo();
  }

  _playVideo(element) {
    if (element) {
      this.timeoutID = setTimeout(() => element.play(), 1000);
    }
  }

  _stopVideo() {
    clearTimeout(this.timeoutID);
    this.timeoutID = null;
  }

  render() {
    const {film, onFilmCardClick} = this.props;
    const {title, previewImage, previewVideo, id} = film;
    const {isVideo} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card"
        onClick={() => onFilmCardClick(id)}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            previewVideo={previewVideo}
            preview={previewImage}
            title={title}
            isVideo={isVideo}
            playVideo={this._playVideo}
          />
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
        </h3>
      </article>
    );
  }
}

FilmCard.propTypes = {
  film: filmType,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default FilmCard;
