import React from "react";
import PropTypes from 'prop-types';

const withAddReviewScreen = (Component) => {
  class WithAddReviewScreen extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        ratingStarsChecked: 3,
        textReview: ``,
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

      // debugger;
      this.onSubmit(ratingStarsChecked, textReview, this.id);

    }

    _handleTextChange(evt) {
      this.setState({
        textReview: evt.target.value,
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
          ratingStarsChecked={this.state.ratingStarsChecked}
          textReview={this.state.textReview}
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
