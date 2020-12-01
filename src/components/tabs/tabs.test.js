import React from "react";
import renderer from "react-test-renderer";
import {Tabs} from "./tabs";
import {FILM, TAB} from "../../test-mock";

it(`Should Tabs render correctly`, () => {
  const tree = renderer
    .create(
        <Tabs
          film={FILM}
          activeTab={TAB}
          handleTabClick={() => {}}
          renderContentForTab={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

