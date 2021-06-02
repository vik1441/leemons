import React from 'react';
import PropTypes from 'prop-types';

function InputIcon({ side, icon, size }) {
  const sizeCss = {
    small: 'py-1',
    regular: 'py-2',
    large: 'py-3',
  };
  const sideCss = side === 'left' ? 'pl-2' : 'right-0 pr-2';

  return (
    <span
      className={`z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 ${sideCss} ${sizeCss[size]}`}
    >
      {icon}
    </span>
  );
}

InputIcon.propTypes = {
  side: PropTypes.oneOf(['left', 'right']).isRequired,
  icon: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'regular', 'large']),
};

function Input_({ leftIcon, rightIcon, size = 'regular', innerRef, ...rest }) {
  const sizeCss = {
    small: 'px-2 py-1',
    regular: 'px-3 py-2',
    large: 'px-3 py-3',
  };
  let inputIconCss = leftIcon ? 'pl-10 ' : '';
  inputIconCss += rightIcon ? 'pr-10 ' : '';

  return (
    <div className="relative flex w-full flex-wrap items-stretch mb-3">
      {leftIcon ? <InputIcon side="left" icon={leftIcon} size={size} /> : null}
      <input
        type="text"
        placeholder="Placeholder"
        className={`${sizeCss[size]} placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full ${inputIconCss}`}
        ref={innerRef}
        {...rest}
      />
      {rightIcon ? <InputIcon side="right" icon={rightIcon} size={size} /> : null}
    </div>
  );
}

Input_.propTypes = {
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  size: PropTypes.oneOf(['small', 'regular', 'large']),
  innerRef: PropTypes.func,
  onBlur: PropTypes.func,
  onchange: PropTypes.func,
  name: PropTypes.string,
};

function Input(props, ref) {
  return <Input_ innerRef={ref} {...props} />;
}

export default React.forwardRef(Input);
