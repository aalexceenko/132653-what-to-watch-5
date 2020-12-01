import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withMyListButton from "./with-my-list-button";
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

const MockComponentWrapped = withMyListButton(MockComponent);

it(`withMyListButton is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      changeMyListAction={() => {}}
      film={FILM}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
