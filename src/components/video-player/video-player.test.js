import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player";
import {PREVIEW, PREVIEW_VIDEO, TITLE, IS_VIDEO} from "../../test-mock";

it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(
        <VideoPlayer
          preview={PREVIEW}
          previewVideo={PREVIEW_VIDEO}
          isVideo={IS_VIDEO}
          title={TITLE}
          playVideo={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

