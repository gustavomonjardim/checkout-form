import propTypes from 'prop-types';
import React from 'react';

import { ChevronLeft } from '../../../../assets/svg/Chevron';
import CreditCardIcon from '../../../../assets/svg/CreditCardIcon';
import CreditCard from '../../../../components/CreditCard';
import { useForm } from '../../../../context/FormContext';

const CheckoutHeader = ({ goBack, step, cardFlipped }) => {
  const { values } = useForm();
  return (
    <>
      {step !== 3 && (
        <>
          <button
            onClick={goBack}
            className="hidden md:flex md:flex-row md:items-center md:pb-12 focus:outline-none"
          >
            <div className="text-white h-8 w-8 mr-2">
              <ChevronLeft />
            </div>
            <span className="text-white text-sm leading-tight">Alterar forma de pagamento</span>
          </button>

          <div className="w-full relative align-middle mb-6 md:hidden">
            <button
              onClick={goBack}
              className="absolute top-0 left-0 text-white h-8 w-8 mr-2 focus:outline-none"
            >
              <ChevronLeft />
            </button>
            <p className="text-white text-center text-sm leading-8">
              <span className="font-bold">Etapa {step + 1}</span> de 3
            </p>
          </div>
        </>
      )}

      <div className="flex flex-row items-center justify-center pb-4 md:pb-8 md:justify-start">
        <div className="mr-4 w-12 h-12 flex-shrink-0">
          <CreditCardIcon />
        </div>
        <h2 className="text-white text-lg lg:text-xl font-bold leading-tight">
          {step === 0 && <>Confirme os itens {<br />} do seu carrinho</>}
          {step === 1 && <>Adicione um novo {<br />} cartão de crédito</>}
          {step === 2 && <> Confirme a {<br />} sua compra</>}
          {step === 3 && <>Compra {<br />} conluída!</>}
        </h2>
      </div>

      {step === 1 && (
        <div className="w-full flex items-center justify-center md:block md:mx-0 md:-mr-24 lg:-mr-32">
          <CreditCard
            flipped={cardFlipped}
            name={values.fullName}
            cardNumber={values.cardNumber}
            expirationDate={values.expirationDate}
            cvv={values.cvv}
          />
        </div>
      )}
    </>
  );
};

CheckoutHeader.propTypes = {
  step: propTypes.number.isRequired,
  goBack: propTypes.func.isRequired,
  cardFlipped: propTypes.bool.isRequired,
};

export default CheckoutHeader;
