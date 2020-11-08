import moment from 'moment';
import {ALL_GENRES} from "./const";


export const getDuration = (minutes) => {
  const duration = moment.duration(minutes, `minutes`);
  const format = minutes > 60 ? `H[h] mm[m]` : `mm[m]`;
  return moment.utc(duration.as(`milliseconds`)).format(format).toString();
};
export const getDateRevieFormat = (date) => moment(date).format(`LL`);

export const generateId = () => `_` + Math.random().toString(36).substr(2, 9);

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomArrayItem = (arr) => {
  if (arr.length === 0) {
    return undefined;
  }

  const randomIndex = getRandomInteger(0, arr.length - 1);

  return arr[randomIndex];
};

export const getRandomArrayItems = function (info) {

  if (info.length === 0) {
    return undefined;
  }

  const restInformation = info.slice();
  const countInformation = getRandomInteger(1, restInformation.length);
  let newArray = [];
  for (let i = 0; i < countInformation; i++) {
    newArray.push(restInformation.splice(getRandomInteger(0, restInformation.length - 1), 1));
  }

  return newArray;
};

export const generateDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

export const getRandomFloat = (a = 1, b = 0) => {
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);

  return (lower + Math.random() * (upper - lower)).toFixed(1).replace(`.`, `,`);
};

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

  return [ALL_GENRES, ...new Set(genres)];
};

export const isShowMoreButton = (films, visibleFilmsCount) => films.length > visibleFilmsCount;

export const getVisibleFilms = (films, visibleFilmsCount) => {
  const visibleFilms = films.slice(0, visibleFilmsCount);

  return visibleFilms;
};

