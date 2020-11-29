import React from "react";
import renderer from "react-test-renderer";
import ShowMoreButton from "./show-more-button";

it(`Should ShowMoreButton render correctly`, () => {
  const tree = renderer
    .create(
        <ShowMoreButton
          onButtonClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
