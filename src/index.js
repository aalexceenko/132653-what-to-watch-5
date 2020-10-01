import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const filmInfo = {
  title: `The Grant Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014
};

ReactDOM.render(
    <App
      title={filmInfo.title}
      genre={filmInfo.genre}
      releaseDate={filmInfo.releaseDate}
    />,
    document.querySelector(`#root`)
);
