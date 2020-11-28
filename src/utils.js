import moment from 'moment';
import {ALL_GENRES, RatingFilms, SEC_PER_MINUTE, MAX_COUNT_GENRES} from "./const";


export const getDuration = (minutes) => {
  const duration = moment.duration(minutes, `minutes`);
  const format = minutes > 60 ? `H[h] mm[m]` : `mm[m]`;
  return moment.utc(duration.as(`milliseconds`)).format(format).toString();
};
export const getDateRevieFormat = (date) => moment(date).format(`LL`);

export const sortReviewRating = (reviewA, reviewB) => {
  if (reviewA.rating > reviewB.rating) {
    return -1;
  }

  if (reviewA.rating < reviewB.rating) {
    return 1;
  }

  return 0;
};

export const extend = (a, b) => Object.assign({}, a, b);

export const getFilmsByGenre = (films, genre) => {
  return (genre === ALL_GENRES) ? films : (films.filter((film) => genre === film.genre));
};

export const getGenres = (films) => {
  const genres = films.map((film) => film.genre);

  return [ALL_GENRES, ...new Set(genres)].slice(0, MAX_COUNT_GENRES);
};

export const isShowMoreButton = (films, visibleFilmsCount) => films.length > visibleFilmsCount;

export const getVisibleFilms = (films, visibleFilmsCount) => films.slice(0, visibleFilmsCount);

export const getVideoProgress = (video) => (Math.floor(video.currentTime) / (Math.floor(video.duration) / 100));

export const getFormattedTime = (time) => {
  time = Math.floor(time);
  const minutes = Math.floor(time / SEC_PER_MINUTE);
  const seconds = Math.floor(time - minutes * SEC_PER_MINUTE);

  const minutesVal = minutes < 10 ? `0${minutes}` : String(minutes);
  const secondsVal = seconds < 10 ? `0${seconds}` : String(seconds);

  return `${minutesVal}:${secondsVal}`;
};

export const getFilmRank = (count) => {
  if (count >= RatingFilms.BAD && count < RatingFilms.NORMAL) {
    return `Bad`;
  } else if (count >= RatingFilms.NORMAL && count < RatingFilms.GOOD) {
    return `Normal`;
  } else if (count >= RatingFilms.GOOD && count < RatingFilms.VERY_GOOD) {
    return `Good`;
  } else if (count >= RatingFilms.VERY_GOOD && count < RatingFilms.AWESOME) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

export const checkTextValidation = (text) => !(text.length >= 50 && text.length <= 400);

