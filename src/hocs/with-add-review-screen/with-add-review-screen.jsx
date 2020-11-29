import React from "react";
import PropTypes from 'prop-types';
import {checkTextValidation} from "../../utils";
import {SHAKE_ANIMATION_TIMEOUT} from "../../const";

const withAddReviewScreen = (Component) => {
  class WithAddReviewScreen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        ratingStarsChecked: 3,
        textReview: ``,
        disabledButton: true,
        disabledTextArea: false,
        errorShake: false,
      };

      this._handleSubmit = this._handleSubmit.bind(this);
      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleStarClick = this._handleStarClick.bind(this);
      this.id = Number(this.props.match.params.id);
      this.onSubmit = this.props.onSubmit;
    }

    _handleSubmit(evt) {
      evt.preventDefault();

      const ratingStarsChecked = this.state.ratingStarsChecked;
      const textReview = this.state.textReview;

      this.setState({
        disabledButton: true,
        disabledTextArea: true,
      });

      this.onSubmit(ratingStarsChecked, textReview, this.id)
        .catch(() => {
          this.setState({
            disabledButton: false,
            disabledTextArea: false,
          });
          this._reportError();
        });

    }

    _reportError() {
      this.setState({errorShake: true});
      setTimeout(() => this.setState({errorShake: false}), SHAKE_ANIMATION_TIMEOUT);
    }

    _handleTextChange(evt) {
      this.setState({
        textReview: evt.target.value,
        disabledButton: checkTextValidation(evt.target.value),
      });
    }

    _handleStarClick(evt) {
      this.setState({
        ratingStarsChecked: evt.target.value,
      });
    }

    render() {

      return (
        <Component
          {...this.props}
          id={this.id}
          ratingStarsChecked={this.state.ratingStarsChecked}
          textReview={this.state.textReview}
          errorShake={this.state.errorShake}
          disabledButton={this.state.disabledButton}
          disabledTextArea={this.state.disabledTextArea}
          handleSubmit={this._handleSubmit}
          handleTextChange={this._handleTextChange}
          handleStarClick={this._handleStarClick}
        />
      );
    }
  }

  WithAddReviewScreen.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  };

  return WithAddReviewScreen;
};

export default withAddReviewScreen;
