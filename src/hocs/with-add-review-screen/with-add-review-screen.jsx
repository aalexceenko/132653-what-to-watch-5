import React from "react";

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
    }

    _handleSubmit(evt) {
      evt.preventDefault();
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

  return WithAddReviewScreen;
};

export default withAddReviewScreen;
