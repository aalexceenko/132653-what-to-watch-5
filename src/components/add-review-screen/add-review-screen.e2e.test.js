import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {AddReviewScreen} from "./add-review-screen";
import {FILMS, ID, MATCH, TITLE} from "../../test-mock";


configure({adapter: new Adapter()});

describe(`AddReviewScreen callback should be called on`, () => {
  it(`rating change`, () => {
    const handleStarClick = jest.fn();

    const addReviewScreen = shallow(
        <AddReviewScreen
          films={FILMS}
          match={MATCH}
          textReview={TITLE}
          handleSubmit={() => {}}
          handleTextChange={() => {}}
          handleStarClick={handleStarClick}
          id={ID}
          disabledButton={true}
          isError={false}
        />
    );

    const ratingLabel1 = addReviewScreen.find(`.rating__input`).at(0);
    const ratingLabel2 = addReviewScreen.find(`.rating__input`).at(1);
    const ratingLabel3 = addReviewScreen.find(`.rating__input`).at(2);
    const ratingLabel4 = addReviewScreen.find(`.rating__input`).at(3);
    const ratingLabel5 = addReviewScreen.find(`.rating__input`).at(4);

    ratingLabel1.simulate(`change`);
    ratingLabel2.simulate(`change`);
    ratingLabel3.simulate(`change`);
    ratingLabel4.simulate(`change`);
    ratingLabel5.simulate(`change`);

    expect(handleStarClick).toHaveBeenCalledTimes(5);
  });

  it(`comment change`, () => {
    const handleTextChange = jest.fn();

    const addReviewScreen = shallow(
        <AddReviewScreen
          films={FILMS}
          match={MATCH}
          textReview={TITLE}
          handleSubmit={() => {}}
          handleTextChange={handleTextChange}
          handleStarClick={() => {}}
          id={ID}
          disabledButton={true}
          isError={false}
        />
    );

    const textarea = addReviewScreen.find(`.add-review__textarea`);

    textarea.simulate(`change`, {
      target: {
        value: ``
      }});

    expect(handleTextChange).toHaveBeenCalledTimes(1);
  });

  it(`submit`, () => {
    const handleSubmit = jest.fn();

    const addReviewScreen = shallow(
        <AddReviewScreen
          films={FILMS}
          match={MATCH}
          textReview={TITLE}
          handleSubmit={handleSubmit}
          handleTextChange={() => {}}
          handleStarClick={() => {}}
          id={ID}
          disabledButton={true}
          isError={false}
        />
    );

    const form = addReviewScreen.find(`.add-review__form`);
    form.simulate(`submit`);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
