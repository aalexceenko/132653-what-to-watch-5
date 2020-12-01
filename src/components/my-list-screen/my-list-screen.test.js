import React from "react";
import renderer from "react-test-renderer";
import MyListScreen from "./my-list-screen";
import {FILMS} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';

jest.mock(`../user-block/user-block`, () => `UserBlock`);

it(`Should MyListScreen render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MyListScreen
            films={FILMS}
            onFilmCardClick={() => {}}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
