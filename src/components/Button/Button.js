import propTypes from 'prop-types';
import React from 'react';

// import Loader from '../Loader';

const Button = ({ text, onClick, loading }) => {
  return (
    <>
      {!loading && (
        <button
          onClick={onClick}
          className="bg-primary rounded-lg p-4 w-full text-white uppercase font-semibold focus:outline-none hover:bg-red-500"
        >
          {text}
        </button>
      )}
      {/* {loading && <Loader />} */}
    </>
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
