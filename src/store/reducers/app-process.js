import {films} from "../../mocks/films";
import {ALL_GENRES, FILM_COUNT_STEP} from "../../const";
import {getGenres, extend} from "../../utils";
import {ActionType} from "../action";


const initialState = {
  activeGenre: ALL_GENRES,
  genres: getGenres(films),
  visibleFilmsCount: FILM_COUNT_STEP,
  films,
};


const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        visibleFilmsCount: action.payload,
      });
  }

  return state;
};

export {appProcess};
