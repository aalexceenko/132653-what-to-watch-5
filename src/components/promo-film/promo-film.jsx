import React from "react";
import PropTypes from "prop-types";
import ButtonPlayVideo from "../button-play-video/button-play-video";
import UserBlock from "../user-block/user-block";
import MyListButton from "../my-list-button/my-list-button";
import {filmType} from '../../types/film';
import {AuthorizationStatus} from "../../const";
import {connect} from 'react-redux';
import Logo from "../logo/logo";
import {changeMyList} from '../../store/api-action';


const PromoFilm = ({filmPromo, authorizationStatus, handleButtonPlayVideo}) => {

  const {title, year, genre, id, backgroundImage, poster} = filmPromo;

  return (


    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logo />

        <UserBlock />

      </header>

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt={title} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{title}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{year}</span>
            </p>

            <div className="movie-card__buttons">
              <ButtonPlayVideo id={id} handleButtonPlayVideo={handleButtonPlayVideo} />

              {authorizationStatus === AuthorizationStatus.AUTH && <MyListButton film={filmPromo} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoFilm.propTypes = {
  filmPromo: filmType,
  handleButtonPlayVideo: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeMyListAction: PropTypes.func.isRequired,

};

const mapStateToProps = ({USER, APP_PROCESS}) => ({
  authorizationStatus: USER.authorizationStatus,
  filmPromo: APP_PROCESS.filmPromo,
  changeMyListAction: PropTypes.func.isRequired,
});

const mapDispatchToProps = (dispatch) => ({
  changeMyListAction(id, status) {
    dispatch(changeMyList(id, status));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoFilm);
