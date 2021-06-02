import React from 'react';
import PropTypes from 'prop-types';
import UIColors from 'leemons-plugin-ui/next/src/utils/colors';

function Chip({ children, color, style }) {
  const styleCss = style === 'round' ? 'rounded-full' : 'rounded';

  return (
    <span
      className={`text-xs font-semibold inline-block py-1 px-2 uppercase ${styleCss} text-${color}-600 bg-${color}-200 uppercase last:mr-0 mr-1`}
    >
      {children}
    </span>
  );
}

Chip.propTypes = {
  children: PropTypes.any,
  color: PropTypes.oneOf(UIColors).isRequired,
  style: PropTypes.oneOf(['round', 'square']),
};

export default Chip;
