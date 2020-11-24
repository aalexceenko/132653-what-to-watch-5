import {getFilmRank} from "../utils";

const adapter = (film) => ({
  id: film.id,
  title: film.name,
  genre: film.genre,
  previewImage: film.preview_image,
  backgroundImage: film.background_image,
  poster: film.poster_image,
  previewVideo: film.preview_video_link,
  trailer: film.video_link,
  year: film.released,
  description: film.description,
  rating: film.rating,
  ratingText: getFilmRank(film.rating),
  votes: film.scores_count,
  director: film.director,
  actors: film.starring,
  runtime: film.run_time,
  myList: film.is_favorite,
});

export const adaptFilmsToClient = (data) => data.map(adapter);
