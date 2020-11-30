import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withPlayer from "./with-player";
import {MATCH, FILMS} from "../../test-mock";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withPlayer(MockComponent);

describe(`withPlayer should pass`, () => {

  it(`isPlaying`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          handlePlayerExitClick={() => {}}
          match={MATCH}
          films={FILMS}
        />);

    expect(wrapper.state().isPlaying).toEqual(true);

  });
  it(`videoCurrentTime`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          handlePlayerExitClick={() => {}}
          match={MATCH}
          films={FILMS}
        />);

    expect(wrapper.state().videoCurrentTime).toEqual(0);

  });

  it(`progressPosition`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          handlePlayerExitClick={() => {}}
          match={MATCH}
          films={FILMS}
        />);

    expect(wrapper.state().progressPosition).toEqual(0);

  });

});
