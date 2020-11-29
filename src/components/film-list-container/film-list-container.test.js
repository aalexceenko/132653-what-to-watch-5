import React from "react";
import renderer from "react-test-renderer";
import {FilmListContainer} from "./film-list-container";
import {FILMS, VISIBLE_FILMS_COUNT} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';


it(`Should FilmListContainer render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter >
          <FilmListContainer
            films={FILMS}
            onFilmCardClick={() => {}}
            visibleFilmsCount={VISIBLE_FILMS_COUNT}
            showMoreFilms={() => {}}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
