import {getFilmRank} from "./utils";

export const VISIBLE_FILMS_COUNT = 8;
export const ID = 1;
export const VIDEO_CURRENT_TIME = 0;
export const PROGRESS_POSITION = 0;
export const AUTHORIZATION_STATUS = `AUTH`;

export const IS_VIDEO = true;
export const IS_PLAYING = true;
export const IS_IN_MY_LIST = false;
export const TAB = `details`;
export const PREVIEW = `img/aviator.jpg`;
export const PREVIEW_VIDEO = `https://upload.wikimedia.org/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`;
export const TITLE = `Bohemian Rhapsody`;
export const ACTIVE_GENRE = `Comedy`;
export const GENRES = [`Comedy`, `Crime`, `Documentary`, `Drama`, `Horror`, `Kids & Family`];
export const MATCH = {
  params: {
    id: 1
  }
};

export const FILMS = [
  {
    description: `A young man who was sentenced to seven years`,
    rating: 3.6,
    director: `Nicolas Winding Refn`,
    genre: `Action`,
    actors: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
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
    actors: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
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

export const FILM = {
  description: `A young man who was sentenced to seven years`,
  rating: 3.6,
  director: `Nicolas Winding Refn`,
  genre: `Action`,
  id: 3,
  title: `Bronson`,
  actors: [`Tom Hardy`, `Kelly Adams`, `Luing Andrews`],
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
};

export const REVIEWS = [
  {
    rating: 3.3,
    date: `2020-10-09T13:38:44.769Z`,
    user: {
      name: `Christina`,
      id: 1,
    },
    comment: `This film is an experience and i has already seen it 4 times`,
  },
  {
    rating: 3.3,
    date: `2020-10-09T13:38:44.769Z`,
    user: {
      name: `Christina`,
      id: 2,
    },
    comment: `This film is an experience and i has already seen it 4 times`,
  }
];
