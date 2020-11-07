import {films} from "../mocks/films";
import {ALL_GENRES} from "../const";
import {getGenres, extend} from "../utils";
import {ActionType} from "./action";


const initialState = {
  activeGenre: ALL_GENRES,
  genres: getGenres(films),
  films,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_GENRE:
      return extend(state, {
        activeGenre: action.payload,
      });
  }

  return state;
};

export {reducer};
