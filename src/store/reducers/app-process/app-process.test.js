import {ActionType} from "../../action";
import {appProcess} from "./app-process";
import {GENRES, VISIBLE_FILMS_COUNT, REVIEWS, ID} from "../../../test-mock";
import {createAPI} from "../../../services/api";
import MockAdapter from "axios-mock-adapter";
import {fetchFilms, fetchFilmPromo, fetchReviews, postReview, changeMyList} from "../../api-action";
import {APIRoute} from "../../../const";
import {adaptFilmsToClient} from "../../../services/adapter";
import {getFilmRank} from "../../../utils";

const mockInitialState = {
  activeGenre: `All genres`,
  films: [],
  reviews: [],
  filmPromo: [],
  visibleFilmsCount: VISIBLE_FILMS_COUNT,
};

export const FILMS = [
  {
    description: `A young man who was sentenced to seven years`,
    rating: 3.6,
    director: `Nicolas Winding Refn`,
    genre: `Action`,
    starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    id: 1,
    title: `Bronson`,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    previewVideo: `https://upload.wikimedia.org/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    trailer: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    votes: 109661,
    runtime: 92,
    year: 2008,
    ratingText: getFilmRank(3.6),
    myList: false,
    comments: false,
  },
  {
    description: `A young man who was`,
    rating: 3.6,
    director: `Nicolas Winding Refn`,
    genre: `Action`,
    starring: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
    id: 2,
    title: `Bronson`,
    poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/bronson.jpg`,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/bronson.jpg`,
    backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/bronson.jpg`,
    previewVideo: `https://upload.wikimedia.org/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    trailer: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
    votes: 109661,
    runtime: 92,
    year: 2008,
    ratingText: getFilmRank(3.6),
    myList: false,
    comments: false,
  },
];

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(appProcess(void 0, {})).toEqual(mockInitialState);
});

it(`Reducer should change filter by a genre`, () => {
  expect(appProcess(mockInitialState, {
    type: ActionType.CHANGE_ACTIVE_GENRE,
    payload: GENRES,
  })).toEqual(Object.assign({}, mockInitialState, {
    activeGenre: GENRES
  }));
});

it(`Reducer should show more films`, () => {
  expect(appProcess(mockInitialState, {
    type: ActionType.SHOW_MORE_FILMS,
    payload: VISIBLE_FILMS_COUNT,
  })).toEqual(Object.assign({}, mockInitialState, {
    visibleFilmsCount: VISIBLE_FILMS_COUNT
  }));
});

it(`Reducer should update films by load films`, () => {
  expect(appProcess({
    films: [],
  }, {
    type: ActionType.LOAD_FILMS,
    payload: FILMS,
  })).toEqual({
    films: FILMS,
  });
});

it(`Reducer should update reviews by load reviews`, () => {
  expect(appProcess({
    reviews: [],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: REVIEWS,
  })).toEqual({
    reviews: REVIEWS,
  });
});


it(`Reducer should update promo by load film promo`, () => {
  expect(appProcess({
    filmPromo: [],
  }, {
    type: ActionType.LOAD_FILM_PROMO,
    payload: FILMS[0],
  })).toEqual({
    filmPromo: FILMS[0],
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmLoader = fetchFilms();
    const filmsFromServer = FILMS.map((film) => adaptFilmsToClient(film));

    apiMock
      .onGet(APIRoute.FILMS)
      .reply(200, FILMS);

    return filmLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILMS,
          payload: filmsFromServer,
        });
      });
  });


  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmPromoLoader = fetchFilmPromo();
    const filmsFromServer = adaptFilmsToClient(FILMS[0]);

    apiMock
      .onGet(APIRoute.FILM_PROMO)
      .reply(200, FILMS[0]);

    return filmPromoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FILM_PROMO,
          payload: filmsFromServer,
        });
      });
  });


  it(`Should make a correct API call to GET /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = fetchReviews(ID);

    apiMock
      .onGet(`/comments/${ID}`)
      .reply(200, REVIEWS);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: REVIEWS,
        });
      });
  });

  it(`Should make a correct API call to POST /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postReviewLoader = postReview(`3`, `comment`, ID);

    apiMock
      .onPost(`/comments/${ID}`, {rating: `3`, comment: `comment`})
      .reply(200, [{fake: true}]);

    return postReviewLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it(`Should make a correct API call to /favorite/:film_id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const sendFavStatusLoader = changeMyList(ID, 1);

    apiMock
      .onPost(`/favorite/${ID}/1`)
      .reply(200, FILMS[0]);

    return sendFavStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });
});
