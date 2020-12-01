import React from "react";
import renderer from "react-test-renderer";
import {UserBlock} from "./user-block";
import {AUTHORIZATION_STATUS} from "../../test-mock";
import {BrowserRouter} from 'react-router-dom';


it(`Should UserBlock render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter >
          <UserBlock
            authorizationStatus={AUTHORIZATION_STATUS}
          />
        </BrowserRouter>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
