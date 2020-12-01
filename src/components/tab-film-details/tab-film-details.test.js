import React from "react";
import renderer from "react-test-renderer";
import TabFilmDetails from "./tab-film-details";
import {FILM} from "../../test-mock";

it(`Should TabFilmDetails render correctly`, () => {
  const tree = renderer
    .create(
        <TabFilmDetails
          runtime={FILM.runtime}
          year={FILM.year}
          genre={FILM.genre}
          director={FILM.director}
          actors={FILM.actors}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
