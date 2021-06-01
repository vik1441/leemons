import PropTypes from 'prop-types';

function Button({ children, ...rest }) {
  return (
    <button className="text-gray-500" {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Button;
