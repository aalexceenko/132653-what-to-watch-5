import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withMyListButton from "./with-my-list-button";
import {FILM} from "../../test-mock";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withMyListButton(MockComponent);

it(`Should change isInMyList`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        changeMyListAction={() => {}}
        film={FILM}
      />);

  expect(wrapper.state().isInMyList).toEqual(FILM.myList);
});

