import classNames from 'classnames';
import propTypes from 'prop-types';
import React from 'react';

import Check from '../../assets/svg/Check';

const Step = ({ title, number, checked, onClick }) => {
  const stepClass = classNames(
    'rounded-full h-6 w-6 flex items-center justify-center border-primary border shadow-sm',
    {
      'text-white': checked,
      'text-primary': !checked,
      'bg-primary': checked,
    }
  );

  return (
    <div className="flex-1 flex flex-row justify-center items-center">
      <div className={stepClass}>
        {!checked && <span className="font-bold text-xs text-primary">{number}</span>}
        {checked && <Check />}
      </div>
      <button
        onClick={checked ? onClick : () => {}}
        className="text-primary text-sm text-center ml-2 focus:outline-none"
      >
        {title}
      </button>
    </div>
  );
};

Step.propTypes = {
  title: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  checked: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
};

export default Step;
