import classNames from 'classnames';
import propTypes from 'prop-types';
import React from 'react';

import CreditCardBackSide from '../../assets/svg/CreditCardBackSide';
import CreditCardFrontSide from '../../assets/svg/CreditCardFrontSide';

import './styles.css';

export const FrontText = ({ children }) => {
  return (
    <p className="text-xs text-white uppercase leading-none tracking-normal text-shadow md:text-sm lg:text-md">
      {children}
    </p>
  );
};

const getCardNumberBlock = (block) => {
  return `${block}${'*'.repeat(4 - block.length)}`;
};

export const CreditCardFront = ({ name, cardNumber, expirationDate }) => {
  const cardNumberArray = cardNumber.split(' ');
  console.log(cardNumberArray);
  return (
    <div className="w-full h-full">
      <CreditCardFrontSide />
      <div className="card-content inset-0 flex flex-col justify-end items-center p-4 lg:p-6">
        <div className="w-full flex flex-row justify-between">
          <span className="text-white text-lg lg:text-2xl uppercase text-shadow ">
            {cardNumberArray[0] ? getCardNumberBlock(cardNumberArray[0]) : '****'}
          </span>
          <span className="text-white text-lg lg:text-2xl uppercase text-shadow ">
            {cardNumberArray[1] ? getCardNumberBlock(cardNumberArray[1]) : '****'}
          </span>
          <span className="text-white text-lg lg:text-2xl uppercase text-shadow ">
            {cardNumberArray[2] ? getCardNumberBlock(cardNumberArray[2]) : '****'}
          </span>
          <span className="text-white text-lg lg:text-2xl uppercase text-shadow ">
            {cardNumberArray[3] ? getCardNumberBlock(cardNumberArray[3]) : '****'}
          </span>
        </div>

        <div className="w-full flex flex-row justify-between items-center overflow-hidden mb-1 mt-8 md:mb-3 lg:mb-4">
          <FrontText>{name.length > 0 ? name : 'Nome do Titular'}</FrontText>
          <div className="ml-3">
            <FrontText>{expirationDate.length > 0 ? expirationDate : '00/00'}</FrontText>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CreditCardBack = ({ cvv }) => {
  return (
    <div className="w-full h-full">
      <CreditCardBackSide />
      <span className="card-content top-1/2 left-1/2 text-dark text-xs md:text-sm lg:text-md leading-none">
        {cvv ? cvv : '***'}
      </span>
    </div>
  );
};

const CreditCard = ({ flipped, name, cardNumber, expirationDate, cvv }) => {
  const cardClasses = classNames('card', { 'is-flipped': flipped });
  return (
    <div className="scene">
      <div className={cardClasses}>
        <div className="card-back">
          <CreditCardBack cvv={cvv} />
        </div>
        <div className="card-front">
          <CreditCardFront name={name} cardNumber={cardNumber} expirationDate={expirationDate} />
        </div>
      </div>
    </div>
  );
};

FrontText.propTypes = {
  children: propTypes.string.isRequired,
};

CreditCardFront.propTypes = {
  name: propTypes.string,
  cardNumber: propTypes.string,
  expirationDate: propTypes.string,
};

CreditCardBack.propTypes = {
  cvv: propTypes.string,
};

CreditCard.propTypes = {
  flipped: propTypes.bool.isRequired,
  name: propTypes.string,
  cardNumber: propTypes.string,
  expirationDate: propTypes.string,
  cvv: propTypes.string,
};

export default CreditCard;
