import React from "react";
import renderer from "react-test-renderer";
import {PromoFilm} from "./promo-film";
import {FILM, AUTHORIZATION_STATUS} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';

jest.mock(`../user-block/user-block`, () => `UserBlock`);
jest.mock(`../my-list-button/my-list-button`, () => `MyListButton`);

it(`Should PromoFilm render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter >
          <PromoFilm
            filmPromo={FILM}
            handleButtonPlayVideo={() => {}}
            authorizationStatus={AUTHORIZATION_STATUS}
            changeMyListAction={() => {}}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
