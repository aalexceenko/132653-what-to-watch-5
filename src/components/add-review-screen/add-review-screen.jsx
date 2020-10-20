import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {filmType} from '../../types/film';


class AddReviewScreen extends React.PureComponent {
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

    const id = this.props.match.params.id;
    const {textReview} = this.state;
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
                <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={this._handleStarClick}/>
                <label className="rating__label" htmlFor="star-1">Rating 1</label>

                <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={this._handleStarClick} />
                <label className="rating__label" htmlFor="star-2">Rating 2</label>

                <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked onChange={this._handleStarClick}/>
                <label className="rating__label" htmlFor="star-3">Rating 3</label>

                <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={this._handleStarClick}/>
                <label className="rating__label" htmlFor="star-4">Rating 4</label>

                <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={this._handleStarClick}/>
                <label className="rating__label" htmlFor="star-5">Rating 5</label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" value={textReview} name="review-text" id="review-text" placeholder="Review text"
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
