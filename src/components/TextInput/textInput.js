import classNames from 'classnames';
import propTypes from 'prop-types';
import React from 'react';

const TextInput = ({
  id,
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  error,
  maxLength,
  formatText,
}) => {
  const inputClass = classNames(
    'appearance-none border-b border-gray-500 w-full py-2 pr-4 placeholder-gray-500 text-dark leading-tight focus:outline-none focus:border-dark'
  );

  const onChangeText = ({ target }) => {
    let { value } = target;
    if (typeof formatText === 'function') {
      value = formatText(value);
    }

    onChange(value);
  };

  return (
    <div className="w-full my-2">
      <label className="block text-gray-500 text-xs" htmlFor={id}>
        {label}
      </label>
      <input
        className={inputClass}
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChangeText}
        onBlur={onBlur}
        maxLength={maxLength}
      />
      {!!error && <p className="text-red-500 font-regular leading-tight text-xs mt-2">{error}</p>}
    </div>
  );
};

TextInput.propTypes = {
  id: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  onBlur: propTypes.func.isRequired,
  error: propTypes.string,
  maxLength: propTypes.number,
  formatText: propTypes.func,
};

TextInput.defaultProps = {
  error: null,
  maxLength: 200,
  formatText: null,
};

export default TextInput;
