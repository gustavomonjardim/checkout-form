import classNames from 'classnames';
import propTypes from 'prop-types';
import React from 'react';

import CreditCardBackSide from '../../assets/svg/CreditCardBackSide';
import CreditCardFrontSide from '../../assets/svg/CreditCardFrontSide';

import './styles.css';

const CreditCard = ({ flipped }) => {
  const cardClasses = classNames('card', { 'is-flipped': flipped });
  return (
    <div className="scene">
      <div className={cardClasses}>
        <div className="card-back">
          <CreditCardBackSide />
        </div>
        <div className="card-front">
          <CreditCardFrontSide />
        </div>
      </div>
    </div>
  );
};

CreditCard.propTypes = {
  flipped: propTypes.bool.isRequired,
};

export default CreditCard;
