export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  LOAD_DATA_FILMS: `LOAD_DATA_FILMS`,
  LOAD_DATA_REVIEWS: `LOAD_DATA_REVIEWS`,
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
  loadDataFilms: (films) => ({
    type: ActionType.LOAD_DATA_FILMS,
    payload: films,
  }),
  loadDataReviews: (reviews) => ({
    type: ActionType.LOAD_DATA_REVIEWS,
    payload: reviews,
  })
};

