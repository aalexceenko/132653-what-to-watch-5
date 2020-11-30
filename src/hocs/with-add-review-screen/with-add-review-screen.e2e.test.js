import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withAddReviewScreen from "./with-add-review-screen";
import {MATCH} from "../../test-mock";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withAddReviewScreen(MockComponent);

describe(`withUserReview should pass`, () => {

  it(`rating`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          onSubmit={() => {}}
          match={MATCH}
        />);

    expect(wrapper.state().ratingStarsChecked).toEqual(3);

  });
  it(`textReview`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          onSubmit={() => {}}
          match={MATCH}
        />);

    expect(wrapper.state().textReview).toEqual(``);

  });

  it(`disabled button`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          onSubmit={() => {}}
          match={MATCH}
        />);

    expect(wrapper.state().disabledButton).toEqual(true);

  });

  it(`some error`, () => {
    const wrapper = shallow(
        <MockComponentWrapped
          onSubmit={() => {}}
          match={MATCH}
        />);

    expect(wrapper.state().isError).toEqual(false);

  });

});
