import React from "react";
import renderer from "react-test-renderer";
import {TabFilmReview} from "./tab-film-review";
import {ID, REVIEWS} from "../../test-mock";


it(`Should TabFilmReview render correctly`, () => {
  const tree = renderer
    .create(
        <TabFilmReview
          reviews={REVIEWS}
          getReviews={() => {}}
          id={ID}
        />

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
