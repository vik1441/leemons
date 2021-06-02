import PropTypes from 'prop-types';
import UIColors from './utils/colors';

function Button({
  color = UIColors[0],
  fullWidth,
  size = 'small',
  outline,
  style,
  children,
  ...rest
}) {
  const sizeCss = {
    small: 'text-xs px-4 py-2',
    regular: 'text-sm px-6 py-3',
    large: 'text-base px-8 py-3',
  };
  const outlineCss = outline
    ? `text-${color}-500 bg-transparent border border-solid border-${color}-500 hover:bg-${color}-500 hover:text-white active:bg-${color}-600`
    : `bg-${color}-500 text-white active:bg-${color}-600 hover:shadow-md shadow`;
  const styleCss = style === 'round' ? 'rounded-full' : 'rounded';
  const fullWidthCss = fullWidth ? 'w-full' : '';
  return (
    <button
      {...rest}
      className={`${outlineCss} font-bold uppercase ${sizeCss[size]} ${styleCss} ${fullWidthCss} outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
      type="button"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  fullWidth: PropTypes.bool,
  color: PropTypes.oneOf(UIColors),
  size: PropTypes.oneOf(['small', 'regular', 'large']),
  outline: PropTypes.bool,
  style: PropTypes.oneOf(['round', 'square']),
};

export default Button;
