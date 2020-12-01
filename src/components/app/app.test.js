import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import {FILMS, FILM} from "../../test-mock";

jest.mock(`../general-page/general-page`, () => `GeneralPage`);
it(`Should App render correctly`, () => {
  const tree = renderer
    .create(
        <App
          films={FILMS}
          filmPromo={FILM}
        />

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
