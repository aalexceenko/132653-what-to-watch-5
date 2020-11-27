import React from "react";
import UserBlock from "../user-block/user-block";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {filmType} from "../../types/film";
import Logo from "../logo/logo";

const createMyListTemplate = (myList, onFilmCardClick) => {
  return (
    <React.Fragment>
      {Object.values(myList.map((film, i) => {
        const {id, previewImage, title} = film;
        return (
          <article className="small-movie-card catalog__movies-card" key={i}
            onClick={() => onFilmCardClick(id)}
          >
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

const MyListScreen = ({films, onFilmCardClick}) => {

  let myListFilms = films.filter((film) => (film.myList === true));

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {createMyListTemplate(myListFilms, onFilmCardClick)}

        </div>
      </section>

      <footer className="page-footer">
        <Logo />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );

};
MyListScreen.propTypes = {
  films: PropTypes.arrayOf(filmType).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default MyListScreen;
