import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {films, reviews} from "./mocks/films";

// const filmInfo = {
//   title: `The Grant Budapest Hotel`,
//   genre: `Drama`,
//   releaseDate: 2014
// };

console.log(films);

ReactDOM.render(
    <App
      // title={filmInfo.title}
      // genre={filmInfo.genre}
      // releaseDate={filmInfo.releaseDate}
      films={films}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
