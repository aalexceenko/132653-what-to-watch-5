import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withPlayer from "./with-player";
import {MATCH, FILMS} from "../../test-mock";

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

const MockComponentWrapped = withPlayer(MockComponent);

it(`withPlayer is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      handlePlayerExitClick={() => {}}
      match={MATCH}
      films={FILMS}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
