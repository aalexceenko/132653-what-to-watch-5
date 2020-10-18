import PropTypes from 'prop-types';
const {shape} = PropTypes;

export const filmType = shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  previewVideo: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.array.isRequired,
  rating: PropTypes.string.isRequired,
  ratingText: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.array.isRequired,
  runtime: PropTypes.number.isRequired,
  myList: PropTypes.bool.isRequired,
});
