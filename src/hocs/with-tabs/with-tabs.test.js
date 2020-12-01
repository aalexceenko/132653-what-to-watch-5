import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withTabs from "./with-tabs";
import {FILM} from "../../test-mock";

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

const MockComponentWrapped = withTabs(MockComponent);

it(`withTabs is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      film={FILM}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
