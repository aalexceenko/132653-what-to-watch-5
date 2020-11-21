import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";
import {adaptFilmsToClient} from "../services/adapter";


export const fetchFilms = () => (dispatch, _getState, api) => (
  api.get(`/films`)
    .then((response) => dispatch(ActionCreator.loadDataFilms(adaptFilmsToClient(response.data))))
);

export const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadDataReviews(data)))
);


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
