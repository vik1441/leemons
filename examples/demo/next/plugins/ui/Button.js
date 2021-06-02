import PropTypes from 'prop-types';

function Button({ fullWidth, children, ...rest }) {
  return (
    <button className="text-gray-500 " {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  fullWidth: PropTypes.bool,
};

export default Button;
