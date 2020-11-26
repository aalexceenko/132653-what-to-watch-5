import React from "react";
import PropTypes from "prop-types";
import {reviewType} from "../../types/review";
import {getDateRevieFormat, sortReviewRating} from "../../utils";
import {fetchReviews} from "../../store/api-action";
import {connect} from "react-redux";

const createReviewTemplate = (reviews) => {
  console.log(reviews);
  return (
    <React.Fragment>
      {Object.values(reviews.map((review, i) => {
        const {comment, user, date, rating} = review;
        return (
          <div className="review" key={i}>
            <blockquote className="review__quote">
              <p className="review__text">{comment}</p>
              <footer className="review__details">
                <cite className="review__author">{user.name}</cite>
                <time className="review__date" dateTime="2016-12-24">{getDateRevieFormat(date)}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{rating}</div>
          </div>
        );
      }))}
    </React.Fragment>
  );
};

class TabFilmReview extends React.PureComponent {

  componentDidMount() {
    const {getReviews, id} = this.props;
    getReviews(id);
  }

  render() {

    const {reviews} = this.props;
    console.log(reviews);

    let sortReviews = reviews.slice().sort(sortReviewRating);

    let rightColumn;
    let leftColumn;

    let lengthReviews = Object.keys(reviews).length;
    let midleCount = Math.round(lengthReviews / 2);

    leftColumn = sortReviews.slice(0, midleCount);
    rightColumn = sortReviews.slice(midleCount);

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">

          {createReviewTemplate(leftColumn)}

        </div>
        <div className="movie-card__reviews-col">

          {createReviewTemplate(rightColumn)}

        </div>
      </div>
    );
  }
}

TabFilmReview.propTypes = {
  reviews: PropTypes.arrayOf(reviewType).isRequired,
  id: PropTypes.number.isRequired,
  getReviews: PropTypes.func.isRequired,

};


const mapStateToProps = ({APP_PROCESS}) => {
  return ({
    reviews: APP_PROCESS.reviews,
  });
};

const mapDispatchToProps = (dispatch) => ({
  getReviews(id) {
    dispatch(fetchReviews(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabFilmReview);
