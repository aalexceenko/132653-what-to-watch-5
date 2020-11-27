import {ALL_GENRES, FILM_COUNT_STEP} from "../../../const";
import {extend} from "../../../utils";
import {ActionType} from "../../action";


const initialState = {
  activeGenre: ALL_GENRES,
  films: [],
  reviews: [],
  filmPromo: [],
  visibleFilmsCount: FILM_COUNT_STEP,
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
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });
    case ActionType.LOAD_FILM_PROMO:
      return extend(state, {
        filmPromo: action.payload,
      });
  }

  return state;
};

export {appProcess};
