import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {filmType} from '../../types/film';
import Tabs from '../tabs/tabs';
import {reviewType} from "../../types/review";

const LIKE_FILMS_MAX = 4;


const createMoreLikeTemplate = (likeFilms) => {
  return (
    <React.Fragment>
      {Object.values(likeFilms.map((film, i) => {
        const {id, previewImage, title} = film;
        return (
          <article className="small-movie-card catalog__movies-card" key={i}>
            <div className="small-movie-card__image">
              <img src={previewImage} alt={title} />
            </div>
            <h3 className="small-movie-card__title">
              <Link className="small-movie-card__link" to={`/films/${id}`}>{title}</Link>
            </h3>
          </article>
        );
      }))}

    </React.Fragment>
  );
};

const FilmScreen = ({films, match, reviews}) => {

  const id = match.params.id;
  const currentFilm = films.find((film) => film.id === id);

  const {title, genre, year, previewImage} = currentFilm;

  let likeFilms = films.filter((film) => (film.genre === genre && film.id !== id)).slice(0, LIKE_FILMS_MAX);


  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={previewImage} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <Link className="btn movie-card__button" to={`/films/${id}/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={previewImage} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">

              <Tabs film={currentFilm} reviews={reviews} />

            </div>
          </div>
        </div>

      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">

            {createMoreLikeTemplate(likeFilms)}

          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );

};


FilmScreen.propTypes = {
  films: PropTypes.arrayOf(filmType).isRequired,
  reviews: PropTypes.arrayOf(reviewType).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default FilmScreen;
