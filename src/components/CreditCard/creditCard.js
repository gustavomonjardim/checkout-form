import classNames from 'classnames';
import propTypes from 'prop-types';
import React from 'react';

import { FrontSide, BackSide } from '../../assets/svg/CreditCard';

import './styles.css';

export const CardText = ({ children }) => {
  return (
    <p className="text-xs text-white uppercase leading-none tracking-normal text-shadow md:text-sm lg:text-md">
      {children}
    </p>
  );
};

const getCardNumberBlock = (block) => {
  return `${block}${'*'.repeat(4 - block.length)}`;
};

export const CreditCardFrontSide = ({ name, cardNumber, expirationDate, generic }) => {
  const cardNumberArray = cardNumber.split(' ');
  return (
    <div className="w-full h-full">
      <FrontSide generic={generic} />
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
          <CardText>{name.length > 0 ? name : 'Nome do Titular'}</CardText>
          <div className="ml-3">
            <CardText>{expirationDate.length > 0 ? expirationDate : '00/00'}</CardText>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CreditCardBackSide = ({ cvv, generic }) => {
  return (
    <div className="w-full h-full">
      <BackSide generic={generic} />
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
          <CreditCardBackSide cvv={cvv} generic={!cardNumber?.length > 0} />
        </div>
        <div className="card-front">
          <CreditCardFrontSide
            name={name}
            cardNumber={cardNumber}
            expirationDate={expirationDate}
            generic={!cardNumber?.length > 0}
          />
        </div>
      </div>
    </div>
  );
};

CardText.propTypes = {
  children: propTypes.string.isRequired,
};

CreditCardFrontSide.propTypes = {
  name: propTypes.string,
  cardNumber: propTypes.string,
  expirationDate: propTypes.string,
  generic: propTypes.bool.isRequired,
};

CreditCardBackSide.propTypes = {
  cvv: propTypes.string,
  generic: propTypes.bool.isRequired,
};

CreditCard.propTypes = {
  flipped: propTypes.bool.isRequired,
  name: propTypes.string,
  cardNumber: propTypes.string,
  expirationDate: propTypes.string,
  cvv: propTypes.string,
};

export default CreditCard;
