import React from "react";
import renderer from "react-test-renderer";
import {GenresList} from "./genres-list";
import {GENRES, ACTIVE_GENRE} from "../../test-mock";

it(`Should GenresList render correctly`, () => {
  const tree = renderer
    .create(
        <GenresList
          genres={GENRES}
          changeActiveGenre={() => {}}
          activeGenre={ACTIVE_GENRE}
        />

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
