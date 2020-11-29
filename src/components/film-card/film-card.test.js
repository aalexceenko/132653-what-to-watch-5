import React from "react";
import renderer from "react-test-renderer";
import {FilmCard} from "./film-card";
import {IS_VIDEO, FILM} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';


it(`Should FilmCard render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter >
          <FilmCard
            film={FILM}
            isVideo={IS_VIDEO}
            onFilmCardClick={() => {}}
            handleMouseEnter={() => {}}
            handleMouseLeave={() => {}}
            playVideo={() => {}}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
