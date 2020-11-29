import React from "react";
import renderer from "react-test-renderer";
import TabFilmOverview from "./tab-film-overview";
import {FILM} from "../../test-mock";

it(`Should TabFilmOverview render correctly`, () => {
  const tree = renderer
    .create(
        <TabFilmOverview
          description={FILM.description}
          rating={FILM.rating}
          ratingText={FILM.ratingText}
          votes={FILM.votes}
          actors={FILM.actors}
          director={FILM.director}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
