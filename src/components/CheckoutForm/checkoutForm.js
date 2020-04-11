import React, { useState } from 'react';

import { ChevronLeft } from '../../assets/svg/Chevron';
import CreditCardIcon from '../../assets/svg/CreditCardIcon';
import { useForm } from '../../context/FormContext';
import { cardNumberMask, cardDateMask } from '../../services/maskService';
import Button from '../Button';
// import CreditCard from '../CreditCard';
import Step, { StepSeparator } from '../Step';
import TextInput from '../TextInput';

const CheckoutForm = () => {
  const { handleChange, handleBlur, values, errors, touched, submitForm } = useForm();
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-screen-lg h-screen flex flex-col bg-white border border-solid border-gray-400 md:h-auto md:flex-row md:mx-8">
      <div className="relative w-full px-5 py-12 bg-primary md:w-1/3 md:p-8 lg:p-12">
        <div className="hidden md:flex md:flex-row md:items-center md:pb-12">
          <div className="text-white h-8 w-8 mr-2">
            <ChevronLeft />
          </div>
          <span className="text-white text-sm leading-tight">Alterar forma de pagamento</span>
        </div>

        <div className="w-full relative align-middle mb-6">
          <div className="absolute top-0 left-0 text-white h-8 w-8 mr-2 md:hidden">
            <ChevronLeft />
          </div>
          <p className="text-white text-center text-sm leading-8 md:hidden">
            <span className="font-bold">Etapa 2</span> de 3
          </p>
        </div>

        <div className="flex flex-row items-center justify-center pb-8">
          <div className=" w-10 h-10 mr-4 lg:w-12 lg:h-12 flex-shrink-0">
            <CreditCardIcon />
          </div>
          <h2 className="text-white text-lg lg:text-xl font-bold leading-tight">
            Adicione um novo {<br />} cartão de crédito
          </h2>
        </div>

        {/* <div className="flex items-center justify-center -mb-40 md:mb-0 md:-mr-24 lg:-mr-32">
          <CreditCard flipped={values.cvv?.length > 0} />
        </div> */}
      </div>
      <div className="w-full flex-1 flex flex-col justify-end p-10 bg-white overflow-y-scroll md:h-full md:w-2/3  lg:px-16 lg:pl-32">
        <div className="hidden md:w-full md:flex md:flex-row md:items-center">
          <Step title="Carrinho" number="1" checked={step >= 1} onClick={() => setStep(0)} />
          <StepSeparator />
          <Step title="Pagamento" number="2" checked={step >= 2} onClick={() => setStep(1)} />
          <StepSeparator />
          <Step title="Confirmação" number="3" checked={step >= 3} onClick={() => setStep(2)} />
        </div>
        <div className="pt-48 md:pt-8">
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
        <div className="pt-6 md:pt-8">
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
        <div className="w-full flex flex-wrap pt-6 md:pt-8">
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
        <div className="pt-6 md:pt-8">
          <TextInput
            id="installments"
            placeholder="Número de parcelas"
            label="Número de parcelas"
            value={values.installments}
            onChange={handleChange('installments')}
            onBlur={handleBlur('installments')}
            error={touched['installments'] ? errors['installments'] : null}
          />
        </div>
        <div className="w-full mt-10 flex justify-center md:justify-end">
          <div className="w-full md:max-w-xs">
            <Button text="Continuar" onClick={submitForm} loading={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
