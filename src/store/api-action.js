import {ActionCreator} from "./action";
import {adaptFilmsToClient} from "../services/adapter";
import {AuthorizationStatus, AppRoute, APIRoute} from "../const";
import browserHistory from "../browser-history";


export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      const films = data.map((film) => adaptFilmsToClient(film));
      dispatch(ActionCreator.loadFilms(films));
    })
);

export const fetchFilmPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILM_PROMO)
    .then(({data}) => {
      const filmPromo = adaptFilmsToClient(data);
      dispatch(ActionCreator.loadFilmPromo(filmPromo));
    })
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

export const postReview = (ratingStarsChecked, textReview, id) => (dispatch, _getState, axios) => {
  return axios.post(`/comments/${id}`, {rating: ratingStarsChecked, comment: textReview})
    .then(() => {
      dispatch(fetchReviews(id));
      browserHistory.push(`/films/${id}`);
    })
    .catch((err) => {
      throw err;
    });
};

export const changeMyList = (id, status) => (dispatch, _getState, axios) => {
  return axios.post(`/favorite/${id}/${status}`)
    .then(() => dispatch(fetchFilms()))
    .then(() => dispatch(fetchFilmPromo()))
    .catch(() => {});
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);
