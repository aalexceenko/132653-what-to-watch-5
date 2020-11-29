import React from "react";
import renderer from "react-test-renderer";
import ButtonPlayVideo from "./button-play-video";
import {ID} from "../../test-mock";

it(`Should ButtonPlayVideo render correctly`, () => {
  const tree = renderer
    .create(
        <ButtonPlayVideo
          id={ID}
          handleButtonPlayVideo={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
