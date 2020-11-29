import React from "react";
import renderer from "react-test-renderer";
import FilmList from "./film-list";
import {FILMS} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';


it(`Should FilmList render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter >
          <FilmList
            films={FILMS}
            onFilmCardClick={() => {}}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
