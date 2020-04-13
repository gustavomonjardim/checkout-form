import propTypes from 'prop-types';
import React from 'react';

import Loader from '../Loader';

const Button = ({ text, onClick, loading }) => {
  return (
    <div className="w-full h-16 flex justify-center items-center">
      {!loading && (
        <button
          onClick={onClick}
          className="bg-primary rounded-lg p-4 w-full text-white uppercase font-bold focus:outline-none hover:bg-red-500"
        >
          {text}
        </button>
      )}
      {loading && <Loader />}
    </div>
  );
};

Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  loading: propTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
