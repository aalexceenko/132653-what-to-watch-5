import PropTypes from 'prop-types';
const {shape} = PropTypes;

export const reviewType = shape({
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
});
