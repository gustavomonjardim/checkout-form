import propTypes from 'prop-types';
import React from 'react';
import FadeIn from 'react-fade-in';

import { useForm } from '../../context/FormContext';
import { cardNumberMask, cardDateMask, currencyMask } from '../../services/maskService';
import TextInput from '../TextInput';

const generateInstallments = (value) => {
  return Array.from(Array(12).keys()).map((item, index) => ({
    value: index + 1,
    label: `${index + 1}x ${currencyMask(value / (index + 1))} sem juros`,
  }));
};

const PaymentForm = ({ flipCard }) => {
  const { handleChange, handleBlur, values, errors, touched } = useForm();

  const handleCVVBlur = (evt) => {
    flipCard();
    handleBlur('cvv')(evt);
  };

  return (
    <FadeIn className="w-full">
      <div className="md:pt-8">
        <TextInput
          id="cardNumber"
          placeholder="Número do cartão"
          label="Número do cartão"
          maxLength={19}
          formatText={(current) => cardNumberMask(current, values.cardNumber)}
          value={values.cardNumber}
          onChange={handleChange('cardNumber')}
          onBlur={handleBlur('cardNumber')}
          error={touched['cardNumber'] ? errors['cardNumber'] : null}
        />
      </div>
      <div className="pt-6 md:pt-8">
        <TextInput
          id="fullName"
          placeholder="Nome (igual ao cartão)"
          label="Nome (igual ao cartão)"
          value={values.fullName}
          onChange={handleChange('fullName')}
          onBlur={handleBlur('fullName')}
          error={touched['fullName'] ? errors['fullName'] : null}
        />
      </div>
      <div className="w-full flex flex-wrap pt-6 md:pt-8">
        <div className="w-2/3 pr-4">
          <TextInput
            id="expirationDate"
            placeholder="00/00"
            label="Validade"
            maxLength={5}
            formatText={(current) => cardDateMask(current, values.expirationDate)}
            value={values.expirationDate}
            onChange={handleChange('expirationDate')}
            onBlur={handleBlur('expirationDate')}
            error={touched['expirationDate'] ? errors['expirationDate'] : null}
          />
        </div>
        <div className="w-1/3">
          <TextInput
            id="cvv"
            placeholder="000"
            label="CVV"
            maxLength={3}
            value={values.cvv}
            onChange={handleChange('cvv')}
            onBlur={handleCVVBlur}
            onFocus={flipCard}
            error={touched['cvv'] ? errors['cvv'] : null}
          />
        </div>
      </div>
      <div className="pt-6 md:pt-8">
        <TextInput
          select
          options={generateInstallments(12000)}
          id="installments"
          placeholder="Número de parcelas"
          label="Número de parcelas"
          value={values.installments}
          onChange={handleChange('installments')}
          onBlur={handleBlur('installments')}
          error={touched['installments'] ? errors['installments'] : null}
        />
      </div>
    </FadeIn>
  );
};

PaymentForm.propTypes = {
  flipCard: propTypes.func.isRequired,
};

export default PaymentForm;
