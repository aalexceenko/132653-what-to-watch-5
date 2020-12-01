import React from "react";
import renderer from "react-test-renderer";
import {AddReviewScreen} from "./add-review-screen";
import {FILMS, ID, MATCH, TITLE} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';

jest.mock(`../user-block/user-block`, () => `UserBlock`);
it(`Should AddReviewScreen render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter >
          <AddReviewScreen
            films={FILMS}
            match={MATCH}
            textReview={TITLE}
            handleSubmit={() => {}}
            handleTextChange={() => {}}
            handleStarClick={() => {}}
            id={ID}
            disabledButton={true}
            isError={false}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
