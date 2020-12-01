import React from "react";
import renderer from "react-test-renderer";
import FilmScreen from "./film-screen";
import {FILMS, MATCH} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';

jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../my-list-button/my-list-button`, () => `MyListButton`);
it(`Should FilmScreen render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter >
          <FilmScreen
            films={FILMS}
            onFilmCardClick={() => {}}
            match={MATCH}
            handleButtonPlayVideo={() => {}}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
