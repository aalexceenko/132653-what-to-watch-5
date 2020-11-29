import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ButtonPlayVideo from "./button-play-video";
import {ID} from "../../test-mock";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should play button be pressed`, () => {
  const handleButtonPlayVideo = jest.fn();

  const wrapper = shallow(
      <ButtonPlayVideo
        handleButtonPlayVideo={handleButtonPlayVideo}
        id={ID}
      />
  );

  const playButton = wrapper.find(`button.btn--play`);
  playButton.simulate(`click`);
  expect(handleButtonPlayVideo).toHaveBeenCalledTimes(1);
});
