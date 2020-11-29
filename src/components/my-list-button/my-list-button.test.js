import React from "react";
import renderer from "react-test-renderer";
import {MyListButton} from "./my-list-button";
import {IS_IN_MY_LIST} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';


it(`Should MyListButton render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter >
          <MyListButton
            handleClick={() => {}}
            isInMyList={IS_IN_MY_LIST}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
