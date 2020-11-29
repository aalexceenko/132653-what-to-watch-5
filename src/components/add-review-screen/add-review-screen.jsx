import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {filmType} from '../../types/film';
import withAddReviewScreen from "../../hocs/with-add-review-screen/with-add-review-screen";
import UserBlock from "../user-block/user-block";
import {postReview} from "../../store/api-action";
import {connect} from "react-redux";
import Logo from "../logo/logo";


const AddReviewScreen = ({textReview, handleSubmit, handleTextChange, handleStarClick, match, films, disabledButton, isError}) => {

  const id = Number(match.params.id);
  const currentFilm = films.find((film) => film.id === id);
  const {title, poster, backgroundImage} = currentFilm;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

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

          <UserBlock />
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={title} width="218" height="327" />
        </div>
      </div>
      <div className="add-review">
        <form action="" className={`add-review__form ${isError ? `shake` : ``} `} onSubmit={handleSubmit}>
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" onChange={handleStarClick}/>
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" onChange={handleStarClick} />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked onChange={handleStarClick}/>
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" onChange={handleStarClick}/>
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" onChange={handleStarClick}/>
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" value={textReview} name="review-text" id="review-text" placeholder="Review text"
              onChange={handleTextChange} />
            <div className="add-review__submit">
              <button className="add-review__btn" disabled={disabledButton} type="submit">Post</button>
            </div>

          </div>
        </form>
      </div>

    </section>
  );

};


AddReviewScreen.propTypes = {
  films: PropTypes.arrayOf(filmType).isRequired,
  match: PropTypes.object.isRequired,
  textReview: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  handleStarClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  disabledButton: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

const mapStateToProps = ({APP_PROCESS}) => ({
  films: APP_PROCESS.films,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (ratingStarsChecked, textReview, id) => {
    return dispatch(postReview(ratingStarsChecked, textReview, id));

  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withAddReviewScreen(AddReviewScreen));
