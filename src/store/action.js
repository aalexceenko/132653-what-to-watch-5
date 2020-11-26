export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const ActionCreator = {
  changeActiveGenre: (genre) => ({
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: genre,
  }),
  showMoreFilms: (visibleFilmsCount) => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: visibleFilmsCount,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  })
};

