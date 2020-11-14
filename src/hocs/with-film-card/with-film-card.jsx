import React from "react";


const withFilmCard = (Component) => {
  class WithFilmCard extends React.PureComponent {
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

      return (
        <Component
          {...this.props}
          isVideo={this.state.isVideo}
          handleMouseEnter={this._handleMouseEnter}
          handleMouseLeave={this._handleMouseLeave}
          playVideo={this._playVideo}
        />
      );
    }
  }

  return WithFilmCard;
};

export default withFilmCard;
