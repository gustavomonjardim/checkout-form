import React, { useState } from 'react';

import CreditCardIcon from '../../assets/svg/CreditCardIcon';
import { useForm } from '../../context/FormContext';
import { cardNumberMask, cardDateMask } from '../../services/maskService';
import CreditCard from '../CreditCard';
import Step from '../Step';
import TextInput from '../TextInput';

const CheckoutForm = () => {
  const { handleChange, handleBlur, values, errors, touched } = useForm();
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-screen-lg h-screen flex flex-col bg-white border border-solid border-gray-400 md:h-auto md:flex-row md:mx-8">
      <div className="relative w-full p-12 bg-primary md:w-1/3">
        <div className="flex flex-row items-center justify-center">
          <div className="mr-4">
            <CreditCardIcon />
          </div>
          <h2 className="text-white text-xl font-semibold leading-tight">
            Adicione um novo cartão de crédito
          </h2>
        </div>
        <div className="flex items-center justify-center -mb-40  mt-8 md:mb-0 md:-mr-24">
          <CreditCard flipped={values.cvv?.length > 0} />
        </div>
      </div>
      <div className="w-full p-12 bg-white md:h-full md:w-2/3  md:px-16 md:pl-32">
        <div className="hidden md:w-full md:flex md:flex-row">
          <Step title="Carrinho" number="1" checked={step >= 1} onClick={() => setStep(0)} />
          <Step title="Pagamento" number="2" checked={step >= 2} onClick={() => setStep(1)} />
          <Step title="Confirmação" number="3" checked={step >= 3} onClick={() => setStep(2)} />
        </div>
        <div className="pt-12">
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
        <div className="pt-12">
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
        <div className="w-full flex flex-wrap pt-12">
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
