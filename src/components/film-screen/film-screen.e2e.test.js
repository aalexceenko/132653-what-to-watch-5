import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmScreen from "./film-screen";
import {FILMS, MATCH} from "../../test-mock";


configure({adapter: new Adapter()});

describe(`FilmScreen callback should be called`, () => {
  it(`On click`, () => {
    const onFilmCardClick = jest.fn();

    const wrapper = mount(
        <FilmScreen
          films={FILMS}
          onFilmCardClick={onFilmCardClick}
          match={MATCH}
          handleButtonPlayVideo={() => {}}
        />
    );

    const filmScreen = wrapper.find(`.catalog__movies-card`);
    filmScreen.simulate(`click`);
    expect(onFilmCardClick).toHaveBeenCalledTimes(1);
  });

  it(`On play video click`, () => {
    const handleButtonPlayVideo = jest.fn();

    const wrapper = shallow(
        <FilmScreen
          films={FILMS}
          onFilmCardClick={() => {}}
          match={MATCH}
          handleButtonPlayVideo={handleButtonPlayVideo}
        />
    );

    const filmScreen = wrapper.find(`.btn--play`);
    filmScreen.simulate(`click`);
    expect(handleButtonPlayVideo).toHaveBeenCalledTimes(1);
  });

});
