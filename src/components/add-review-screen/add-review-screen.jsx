import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {generateId} from '../../utils.js';
import RatingStars from '../rating-stars/rating-stars';
import {filmType} from '../../types/film';


class AddReviewScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ratingStarsChecked: [false, false, false, false, false],
      textReview: ``,
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleTextChange = this._handleTextChange.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
  }

  _handleTextChange(evt) {
    this.setState({
      textReview: evt.target.value,
    });
  }

  _handleStarClick(checked, index) {
    const newRatingStarsChecked = Array(5).fill(false);
    newRatingStarsChecked[index] = checked;
    this.setState({
      ratingStarsChecked: newRatingStarsChecked,
    });
  }

  render() {

    const id = this.props.match.params.id;
    const {ratingStarsChecked} = this.state;
    const currentFilm = this.props.films.find((film) => film.id === id);
    const {title, previewImage} = currentFilm;

    return (
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={previewImage} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${id}`} className="breadcrumbs__link">{title}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={previewImage} alt={title} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={this._handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {ratingStarsChecked.map((starCheck, index) => (
                  <RatingStars
                    key={generateId()}
                    index={index}
                    starCheck={starCheck}
                    onStarClick={(checked) => this._handleStarClick(checked, index)} />
                ))}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
                onChange={this._handleTextChange} />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );

  }

}

AddReviewScreen.propTypes = {
  films: PropTypes.arrayOf(filmType).isRequired,
  match: PropTypes.object.isRequired,
};

export default AddReviewScreen;
