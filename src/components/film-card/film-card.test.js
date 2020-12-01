import React from "react";
import renderer from "react-test-renderer";
import {FilmCard} from "./film-card";
import {FILM} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';

describe(`Should FilmCard render correctly`, () => {
  it(`with video`, () => {
    const tree = renderer
      .create(
          <BrowserRouter >
            <FilmCard
              film={FILM}
              isVideo={true}
              onFilmCardClick={() => {}}
              handleMouseEnter={() => {}}
              handleMouseLeave={() => {}}
              playVideo={() => {}}
            />
          </BrowserRouter>

      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`without video`, () => {
    const tree = renderer
      .create(
          <BrowserRouter >
            <FilmCard
              film={FILM}
              isVideo={false}
              onFilmCardClick={() => {}}
              handleMouseEnter={() => {}}
              handleMouseLeave={() => {}}
              playVideo={() => {}}
            />
          </BrowserRouter>

      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
