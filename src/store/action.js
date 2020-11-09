export const ActionType = {
  CHANGE_ACTIVE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
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
};

