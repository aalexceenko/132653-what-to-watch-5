import React from "react";
import UserBlock from "../user-block/user-block";
import PropTypes from "prop-types";
import {filmType} from "../../types/film";
import Logo from "../logo/logo";
import FilmCard from '../film-card/film-card';


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
          {myListFilms.map((film) => (
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
  );

};
MyListScreen.propTypes = {
  films: PropTypes.arrayOf(filmType).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
};

export default MyListScreen;
