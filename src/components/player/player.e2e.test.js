import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./player";
import {TITLE, VIDEO_CURRENT_TIME, PROGRESS_POSITION} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';

configure({adapter: new Adapter()});

describe(`Player callback should be called on`, () => {
  it(`Play button click`, () => {
    const handlePlayerPlayClick = jest.fn();

    const wrapper = mount(
        <BrowserRouter >
          <Player
            isPlaying={true}
            videoCurrentTime={VIDEO_CURRENT_TIME}
            progressPosition={PROGRESS_POSITION}
            title={TITLE}
            handlePlayerExitClick={() => {}}
            handlePlayerFullScreenClick={() => {}}
            handlePlayerPlayClick={handlePlayerPlayClick}
            handlePlayerPauseClick={() => {}}
          />
        </BrowserRouter>
    );

    const playButton = wrapper.find(`.player__play`);
    playButton.simulate(`click`);
    expect(handlePlayerPlayClick).toHaveBeenCalledTimes(1);
  });

  it(`FullScreen button click`, () => {
    const handlePlayerFullScreenClick = jest.fn();

    const wrapper = mount(
        <BrowserRouter >
          <Player
            isPlaying={true}
            videoCurrentTime={VIDEO_CURRENT_TIME}
            progressPosition={PROGRESS_POSITION}
            title={TITLE}
            handlePlayerExitClick={() => {}}
            handlePlayerFullScreenClick={handlePlayerFullScreenClick}
            handlePlayerPlayClick={() => {}}
            handlePlayerPauseClick={() => {}}
          />
        </BrowserRouter>
    );

    const fullscreenButton = wrapper.find(`.player__full-screen`);
    fullscreenButton.simulate(`click`);
    expect(handlePlayerFullScreenClick).toHaveBeenCalledTimes(1);
  });
});
