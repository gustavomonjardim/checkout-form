import React from 'react';

import { useForm } from '../../context/FormContext';
import { cardNumberMask, cardDateMask } from '../../services/maskService';
import TextInput from '../TextInput';

const CheckoutForm = () => {
  const { handleChange, handleBlur, values, errors, touched } = useForm();

  return (
    <div className="w-full max-w-screen-lg h-screen md:h-auto flex flex-col md:flex-row md:mx-8 bg-white border border-solid border-gray-400">
      <div className="flex-1 w-full md:w-1/3 bg-primary"></div>
      <div className="w-full md:w-2/3 bg-white md:h-full p-12 md:px-16">
        <div className="pt-12 md:pt-12">
          <TextInput
            id="fullName"
            placeholder="Full Name"
            label="Full Name"
            value={values.fullName}
            onChange={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            error={touched['fullName'] ? errors['fullName'] : null}
          />
        </div>
        <div className="pt-12 md:pt-12">
          <TextInput
            id="cardNumber"
            placeholder="0000 0000 0000 0000"
            label="Card Number"
            maxLength={19}
            formatText={(current) => cardNumberMask(current, values.cardNumber)}
            value={values.cardNumber}
            onChange={handleChange('cardNumber')}
            onBlur={handleBlur('cardNumber')}
            error={touched['cardNumber'] ? errors['cardNumber'] : null}
          />
        </div>
        <div className="w-full flex flex-wrap pt-12 md:pt-12">
          <div className="w-2/3 pr-4">
            <TextInput
              id="expirationDate"
              placeholder="00/00"
              label="Expiration Date"
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
              onBlur={handleBlur('cvv')}
              error={touched['cvv'] ? errors['cvv'] : null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
