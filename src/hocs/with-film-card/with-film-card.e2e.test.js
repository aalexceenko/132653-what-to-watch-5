
import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withFilmCard from "./with-film-card";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withFilmCard(MockComponent);

it(`Should have an initial state`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        handleMouseEnter={() => {}}
        handleMouseLeave={() => {}}
        playVideo={() => {}}
      />);

  expect(wrapper.state().isVideo).toEqual(false);
  wrapper.setState({isVideo: true});
  expect(wrapper.state().isVideo).toEqual(true);
});
