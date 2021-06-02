import * as _ from 'lodash';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UIColors from './utils/colors';

function Progressbar({ color, percentage, bars, label, showPercentage }) {
  const [progressbarColor, setProgressbarColor] = useState('');
  const [progressbars, setProgressbar] = useState([]);
  const [progressbarPercentage, setProgressbarPercentage] = useState(0);
  useEffect(() => {
    if (!bars) {
      setProgressbar([{ color, percentage }]);
      setProgressbarColor(color);
      setProgressbarPercentage(percentage);
    } else {
      const barsToSet = _.sort(bars, ['percentage']);
      setProgressbar(barsToSet);
      if (barsToSet[0]) {
        setProgressbarColor(barsToSet[0].color);
        setProgressbarPercentage(_.sumBy(barsToSet, 'percentage'));
      }
    }
  }, [color, percentage, bars]);

  return (
    <div className="relative pt-1">
      {label || showPercentage ? (
        <div className="flex mb-2 items-center justify-between">
          <div>
            {label ? (
              <span
                className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-${progressbarColor}-600 bg-${progressbarColor}-200`}
              >
                Task in progress
              </span>
            ) : null}
          </div>

          <div className="text-right">
            {showPercentage ? (
              <span className={`text-xs font-semibold inline-block text-${progressbarColor}-600`}>
                {progressbarPercentage}%
              </span>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-${progressbarColor}-200`}>
        {progressbars.map((value, index) => (
          <div
            key={index}
            style={{ width: `${value.percentage}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${value.color}-500`}
          ></div>
        ))}
      </div>
    </div>
  );
}

function checkPercentage(percentage) {
  if (percentage < 0 || percentage > 100)
    return new Error('The percentage must be between 0 and 100.');
  return null;
}

function checkIfBarPropertyIsUsing(props, propName) {
  if (!props.bars && !props[propName])
    return new Error(
      `If the property bars is not specified, it is necessary to specify the property ${propName}`
    );
  return null;
}

function checkIsNumber(props, propName, componentName) {
  if (!_.isNumber(props[propName])) {
    return new Error(
      `The prop \`${propName}\` is marked as required in \`${componentName}\`, but its value is \`${props[propName]}\`.`
    );
  }
  return null;
}

Progressbar.propTypes = {
  label: PropTypes.string,
  showPercentage: PropTypes.bool,
  color: (props, propName, componentName) => {
    if (!props.bars) {
      const barUsing = checkIfBarPropertyIsUsing(props, propName);
      if (barUsing) return barUsing;
      if (UIColors.indexOf(props[propName]) < 0) {
        return new Error(
          `Invalid prop \`${propName}\` of value \`${
            props[propName]
          }\` supplied to \`${componentName}\`, expected one of ${JSON.stringify(UIColors)}`
        );
      }
    }
    return null;
  },
  percentage: (props, propName, componentName) => {
    if (!props.bars) {
      const barUsing = checkIfBarPropertyIsUsing(props, propName);
      if (barUsing) return barUsing;
      const isNumber = checkIsNumber(props, propName, componentName);
      if (isNumber) return isNumber;
      return checkPercentage(props[propName]);
    }
    return null;
  },
  bars: PropTypes.arrayOf(
    PropTypes.shape({
      percentage: (props, propName, componentName) => {
        const isNumber = checkIsNumber(props, propName, componentName);
        if (isNumber) return isNumber;
        return checkPercentage(props[propName]);
      },
      color: PropTypes.oneOf(UIColors).isRequired,
    })
  ),
};

export default Progressbar;
