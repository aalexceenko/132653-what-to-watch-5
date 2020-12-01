import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withTabs from "./with-tabs";
import {FILM} from "../../test-mock";
import {TabsType} from "../../const";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withTabs(MockComponent);

it(`Should pass activeTab OVERVIEW`, () => {
  const wrapper = shallow(
      <MockComponentWrapped
        film={FILM}
      />);

  expect(wrapper.state().activeTab).toEqual(TabsType.OVERVIEW);
});
