import React, { useState } from 'react';

import { FormProvider } from '../../context/FormContext';
import { paymentValidation } from '../../services/paymentValidation';
import CheckoutHeader from '../CheckoutHeader';
import PaymentForm from '../PaymentForm';
import Step, { StepSeparator } from '../Step';

const Checkout = () => {
  const [step, setStep] = useState(1);

  const [paymentData] = useState({
    cardNumber: '',
    fullName: '',
    expirationDate: '',
    cvv: '',
    installments: '',
  });

  const submitPaymentData = (data) => {
    console.log(data);
  };

  return (
    <FormProvider
      initialValues={paymentData}
      onSubmit={submitPaymentData}
      validationSchema={paymentValidation}
    >
      <div className="w-full max-w-screen-lg h-screen flex flex-col bg-white border border-solid border-gray-500 md:h-auto md:flex-row md:mx-8">
        <div className="relative overflow-visible w-full h-64 px-5 pt-8 bg-primary md:w-1/3 md:h-auto md:pt-12 md:p-8">
          <CheckoutHeader />
        </div>

        <div className="w-full flex flex-col justify-end p-10 pt-24 bg-white md:h-full md:w-2/3 md:pt-10 md:pl-24 lg:pr-16 lg:pl-32">
          <div className="hidden md:w-full md:flex md:flex-row md:items-center">
            <Step title="Carrinho" number="1" checked={step >= 1} onClick={() => setStep(0)} />
            <StepSeparator />
            <Step title="Pagamento" number="2" checked={step >= 2} onClick={() => setStep(1)} />
            <StepSeparator />
            <Step title="Confirmação" number="3" checked={step >= 3} onClick={() => setStep(2)} />
          </div>
          {step === 1 && <PaymentForm />}
        </div>
      </div>
    </FormProvider>
  );
};

export default Checkout;
