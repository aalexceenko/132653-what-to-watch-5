import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withAddReviewScreen from "./with-add-review-screen";
import {MATCH} from "../../test-mock";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withAddReviewScreen(MockComponent);

it(`withAddReviewScreen is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onSubmit={() => {}}
      match={MATCH}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
