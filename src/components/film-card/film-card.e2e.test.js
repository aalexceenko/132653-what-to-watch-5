import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FilmCard} from "./film-card";
import {FILM} from "../../test-mock";


configure({adapter: new Adapter()});

describe(`FilmCard callback should be called`, () => {
  it(`On click`, () => {
    const onFilmCardClick = jest.fn();

    const wrapper = shallow(
        <FilmCard
          film={FILM}
          playVideo={() => {}}
          handleMouseEnter={() => {}}
          handleMouseLeave={() => {}}
          onFilmCardClick={onFilmCardClick}
          isVideo={true}
        />
    );

    const filmCard = wrapper.find(`.catalog__movies-card`);
    filmCard.simulate(`click`);
    expect(onFilmCardClick).toHaveBeenCalledTimes(1);
  });

  it(`On mouse enter`, () => {
    const handleMouseEnter = jest.fn();

    const wrapper = shallow(
        <FilmCard
          film={FILM}
          playVideo={() => {}}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={() => {}}
          onFilmCardClick={() => {}}
          isVideo={true}
        />
    );

    const filmCard = wrapper.find(`.catalog__movies-card`);
    filmCard.simulate(`mouseenter`);
    expect(handleMouseEnter).toHaveBeenCalledTimes(1);
  });

  it(`On mouse leave`, () => {
    const handleMouseLeave = jest.fn();

    const wrapper = shallow(
        <FilmCard
          film={FILM}
          playVideo={() => {}}
          handleMouseEnter={() => {}}
          handleMouseLeave={handleMouseLeave}
          onFilmCardClick={() => {}}
          isVideo={true}
        />
    );

    const filmCard = wrapper.find(`.catalog__movies-card`);
    filmCard.simulate(`mouseleave`);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });
});
