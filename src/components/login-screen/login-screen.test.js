import React from "react";
import renderer from "react-test-renderer";
import {LoginScreen} from "./login-screen";
import {BrowserRouter} from 'react-router-dom';


it(`Should LoginScreen render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter >
          <LoginScreen
            onSubmit={() => {}}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
