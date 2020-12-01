import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {LoginScreen} from "./login-screen";
import {BrowserRouter} from 'react-router-dom';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should submit button be pressed`, () => {
  const onSubmit = jest.fn();

  const wrapper = mount(
      <BrowserRouter>
        <LoginScreen
          onSubmit={onSubmit}
        />
      </BrowserRouter>

  );

  const form = wrapper.find(`form`);
  form.simulate(`submit`);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
