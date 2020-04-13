import React, { useState } from 'react';

import { FormProvider } from '../../context/FormContext';
import { paymentValidation } from '../../services/paymentValidation';
import CheckoutFooter from '../CheckoutFooter';
import CheckoutHeader from '../CheckoutHeader';
import PaymentForm from '../PaymentForm';
import Step, { StepSeparator } from '../Step';

import './styles.css';

const Checkout = () => {
  const [step, setStep] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);

  const flipCard = () => {
    setCardFlipped((c) => !c);
  };

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    fullName: '',
    expirationDate: '',
    cvv: '',
    installments: '',
  });

  const submitPaymentData = (data) => {
    setPaymentData(data);
    setStep(step + 1);
  };

  const goBack = () => {
    if (step === 0) {
      return;
    }
    setStep(step - 1);
  };

  return (
    <FormProvider
      initialValues={paymentData}
      onSubmit={submitPaymentData}
      validationSchema={paymentValidation}
    >
      <div className="checkout-card w-full max-w-screen-lg h-screen flex flex-col bg-white border border-solid border-gray-500 md:h-auto md:flex-row md:flex-grow md:mx-8">
        <div className="relative overflow-visible w-full h-64 px-5 pt-8 bg-primary md:w-1/3 md:h-auto md:pt-12 md:p-8">
          <CheckoutHeader goBack={goBack} step={step} cardFlipped={cardFlipped} />
        </div>

        <div className="checkout-card w-full h-full flex flex-col justify-between p-10 pt-24 bg-white md:w-2/3 md:pt-10 md:pl-24 lg:pr-16 lg:pl-32">
          <div className="hidden md:w-full md:flex md:flex-row md:items-center">
            <Step title="Carrinho" number="1" checked={step >= 1} onClick={() => setStep(0)} />
            <StepSeparator />
            <Step title="Pagamento" number="2" checked={step >= 2} onClick={() => setStep(1)} />
            <StepSeparator />
            <Step title="Confirmação" number="3" checked={step >= 3} onClick={() => setStep(2)} />
          </div>

          {step === 0 && (
            <div>
              <p className="w-full text-center text-gray-500 text-lg">Carrinho</p>
            </div>
          )}
          {step === 1 && <PaymentForm flipCard={flipCard} />}
          {step === 2 && (
            <div>
              <p className="w-full text-center text-gray-500 text-lg">Confirmar dados</p>
            </div>
          )}

          <CheckoutFooter step={step} setStep={setStep} />
        </div>
      </div>
    </FormProvider>
  );
};

export default Checkout;
