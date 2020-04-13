import classNames from 'classnames';
import propTypes from 'prop-types';
import React from 'react';

import { ChevronDown } from '../../assets/svg/Chevron';

const defaultClasses = classNames(
  'appearance-none w-full py-2 pr-4 placeholder-gray-500 bg-transparent leading-tight',
  'border-b border-gray-500 rounded-none',
  'focus:outline-none focus:border-dark'
);

const Select = ({ value, id, placeholder, onChange, onBlur, options }) => {
  const selectClasses = classNames(defaultClasses, {
    'text-dark': value.length > 0,
    'text-gray-500': !value,
  });
  return (
    <div className="relative">
      <select className={selectClasses} value={value} id={id} onChange={onChange} onBlur={onBlur}>
        <option className="text-gray-500" value="" disabled>
          {placeholder}
        </option>
        {options.map((item) => (
          <option className="text-dark" key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
        <div className="w-6 h-6 text-primary flex-shrink-0">
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

const TextInput = ({
  id,
  placeholder,
  select,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  maxLength,
  formatText,
  options,
}) => {
  const inputClasses = classNames(defaultClasses, 'text-dark');

  const onChangeText = ({ target }) => {
    let { value } = target;
    if (typeof formatText === 'function') {
      value = formatText(value);
    }

    onChange(value);
  };

  return (
    <div className="w-full my-2 h-20">
      <label className="block text-gray-500 text-xs" htmlFor={id}>
        {label}
      </label>
      {!select && (
        <input
          className={inputClasses}
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          maxLength={maxLength}
        />
      )}
      {select && (
        <Select
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChangeText}
          onBlur={onBlur}
          options={options}
        />
      )}
      {!!error && <p className="text-red-500 font-regular leading-tight text-xs mt-2">{error}</p>}
    </div>
  );
};

Select.propTypes = {
  id: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onBlur: propTypes.func.isRequired,
  options: propTypes.array.isRequired,
};

TextInput.propTypes = {
  id: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onBlur: propTypes.func.isRequired,
  onFocus: propTypes.func,
  error: propTypes.string,
  maxLength: propTypes.number,
  formatText: propTypes.func,
  select: propTypes.bool,
  options: propTypes.array,
};

TextInput.defaultProps = {
  error: null,
  maxLength: 200,
  formatText: null,
  select: false,
  options: [],
  onFocus: () => {},
};

export default TextInput;
