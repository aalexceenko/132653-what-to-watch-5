import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {filmType} from "../../types/film";
import Tabs from "../tabs/tabs";
import ButtonPlayVideo from "../button-play-video/button-play-video";
import UserBlock from "../user-block/user-block";
import MyListButton from "../my-list-button/my-list-button";
import Logo from "../logo/logo";
import {LIKE_FILMS_MAX} from "../../const";
import FilmCard from '../film-card/film-card';


const FilmScreen = ({films, match, handleButtonPlayVideo, onFilmCardClick}) => {

  const id = Number(match.params.id);
  const currentFilm = films.find((film) => film.id === id);

  const {title, genre, year, backgroundImage, poster} = currentFilm;

  let likeFilms = films.filter((film) => (film.genre === genre && film.id !== id)).slice(0, LIKE_FILMS_MAX);


  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <ButtonPlayVideo id={id} handleButtonPlayVideo={handleButtonPlayVideo} />


                <MyListButton film={currentFilm} />
                <Link className="btn movie-card__button" to={`/films/${id}/review`}>Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={title} width="218" height="327" />
            </div>

            <div className="movie-card__desc">

              <Tabs film={currentFilm} />

            </div>
          </div>
        </div>

      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">

            {likeFilms.map((film) => (
              <FilmCard key={film.id} film={film} onFilmCardClick={onFilmCardClick} />
            ))}

          </div>
        </section>

        <footer className="page-footer">
          <Logo isFooter={true} />

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
  onFilmCardClick: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  handleButtonPlayVideo: PropTypes.func.isRequired,
};

export default FilmScreen;
