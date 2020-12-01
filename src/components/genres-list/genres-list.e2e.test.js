import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {GenresList} from "./genres-list";
import {GENRES, ACTIVE_GENRE} from "../../test-mock";


configure({adapter: new Adapter()});

describe(`GenresList callback should be called on genre click`, () => {
  it(`On click`, () => {
    const changeActiveGenre = jest.fn();

    const wrapper = shallow(
        <GenresList
          genres={GENRES}
          changeActiveGenre={changeActiveGenre}
          activeGenre={ACTIVE_GENRE}
        />
    );

    const genreLink1 = wrapper.find(`.catalog__genres-link`).at(0);
    const genreLink2 = wrapper.find(`.catalog__genres-link`).at(1);
    const genreLink3 = wrapper.find(`.catalog__genres-link`).at(2);
    const genreLink4 = wrapper.find(`.catalog__genres-link`).at(3);

    genreLink1.simulate(`click`, {preventDefault() {}});
    genreLink2.simulate(`click`, {preventDefault() {}});
    genreLink3.simulate(`click`, {preventDefault() {}});
    genreLink4.simulate(`click`, {preventDefault() {}});

    expect(changeActiveGenre).toHaveBeenCalledTimes(4);
  });

});
