import React from "react";
import renderer from "react-test-renderer";
import Player from "./player";
import {IS_PLAYING, TITLE, VIDEO_CURRENT_TIME, PROGRESS_POSITION} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';


it(`Should Player render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter >
          <Player
            isPlaying={IS_PLAYING}
            videoCurrentTime={VIDEO_CURRENT_TIME}
            progressPosition={PROGRESS_POSITION}
            title={TITLE}
            handlePlayerExitClick={() => {}}
            handlePlayerFullScreenClick={() => {}}
            handlePlayerPlayClick={() => {}}
            handlePlayerPauseClick={() => {}}
          />
          <React.Fragment />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
