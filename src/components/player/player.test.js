import React from "react";
import renderer from "react-test-renderer";
import Player from "./player";
import {TITLE, VIDEO_CURRENT_TIME, PROGRESS_POSITION} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';

describe(`Should Player render correctly`, () => {
  it(`Playing`, () => {
    const tree = renderer
      .create(
          <BrowserRouter >
            <Player
              isPlaying={true}
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

  it(`On pause`, () => {
    const tree = renderer
      .create(
          <BrowserRouter >
            <Player
              isPlaying={false}
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
});
