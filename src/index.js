import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {films, reviews} from "./mocks/films";

ReactDOM.render(
    <App
      films={films}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
