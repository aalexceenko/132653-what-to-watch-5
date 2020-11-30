import React from "react";
import renderer from "react-test-renderer";
import {MyListButton} from "./my-list-button";
import {BrowserRouter} from 'react-router-dom';

describe(`Should MyListButton render correctly`, () => {
  it(`in my list`, () => {
    const tree = renderer
      .create(
          <BrowserRouter >
            <MyListButton
              handleClick={() => {}}
              isInMyList={true}
            />
          </BrowserRouter>

      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`not in my list`, () => {
    const tree = renderer
      .create(
          <BrowserRouter >
            <MyListButton
              handleClick={() => {}}
              isInMyList={false}
            />
          </BrowserRouter>

      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
