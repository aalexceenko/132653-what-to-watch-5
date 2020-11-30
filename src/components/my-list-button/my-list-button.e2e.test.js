import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {MyListButton} from "./my-list-button";
import {BrowserRouter} from 'react-router-dom';


configure({adapter: new Adapter()});

describe(`MyListButton callback should be called`, () => {
  it(`On click`, () => {
    const handleClick = jest.fn();

    const wrapper = mount(
        <BrowserRouter >
          <MyListButton
            handleClick={handleClick}
            isInMyList={true}
          />
        </BrowserRouter>
    );

    const button = wrapper.find(`.btn--list`);
    button.simulate(`click`);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });


});
