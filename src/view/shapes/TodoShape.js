import PropTypes from 'prop-types';

export const TodoShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};
