import React from "react";
import renderer from "react-test-renderer";
import GeneralPage from "./general-page";
import {BrowserRouter} from 'react-router-dom';
jest.mock(`../promo-film/promo-film`, () => `PromoFilm`);
jest.mock(`../genres-list/genres-list`, () => `GenresList`);
jest.mock(`../film-list-container/film-list-container`, () => `FilmListContainer`);


it(`Should GeneralPage render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter >
          <GeneralPage
            onFilmCardClick={() => {}}
            handleButtonPlayVideo={() => {}}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
