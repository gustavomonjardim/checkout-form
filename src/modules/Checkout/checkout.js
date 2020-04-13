import React, { useState } from 'react';

import CheckCircle from '../../assets/svg/CheckCircle';
import Step, { StepSeparator } from '../../components/Step';
import { FormProvider } from '../../context/FormContext';
import { paymentValidation } from '../../services/paymentValidation';

import CheckoutFooter from './components/CheckoutFooter';
import CheckoutHeader from './components/CheckoutHeader';
import PaymentForm from './components/PaymentForm';

import './styles.css';

const initialValues = {
  cardNumber: '',
  fullName: '',
  expirationDate: '',
  cvv: '',
  installments: '',
};

const Checkout = () => {
  const [step, setStep] = useState(0);
  const [cardFlipped, setCardFlipped] = useState(false);

  const [paymentData, setPaymentData] = useState(initialValues);

  const flipCard = () => {
    setCardFlipped((c) => !c);
  };

  const submitPaymentData = (data, { resetForm }) => {
    setPaymentData(data);
    resetForm();
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
      <div className="checkout-card w-full max-w-screen-lg h-screen flex flex-col bg-white border border-gray-500 md:h-auto md:flex-row md:mx-8">
        <div className="relative overflow-visible w-full h-64 px-5 pt-8 bg-primary md:w-1/3 md:h-auto md:p-8 md:pt-12 lg:pl-12 lg:pr-6">
          <CheckoutHeader goBack={goBack} step={step} cardFlipped={cardFlipped} />
        </div>

        <div className="checkout-card w-full h-full flex flex-col justify-between p-10 pt-24 bg-white md:w-2/3 md:pt-10 md:pl-24 lg:pr-16 lg:pl-32">
          {step !== 3 && (
            <div className="hidden md:w-full md:flex md:flex-row md:items-center">
              <Step title="Carrinho" number="1" checked={step >= 1} onClick={() => setStep(0)} />
              <StepSeparator />
              <Step title="Pagamento" number="2" checked={step >= 2} onClick={() => setStep(1)} />
              <StepSeparator />
              <Step title="Confirmação" number="3" checked={step >= 3} onClick={() => setStep(2)} />
            </div>
          )}

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

          {step === 3 && (
            <div className="w-full flex flex-col justify-center items-center md:mt-12">
              <div className=" w-20 h-20 md:w-24 md:h-24 text-primary mb-4 md:mb-6">
                <CheckCircle />
              </div>
              <h3 className="w-full text-center text-primary font-bold text-lg md:text-xl">
                Sua compra foi concluída com sucesso!
              </h3>
            </div>
          )}

          <CheckoutFooter step={step} setStep={setStep} />
        </div>
      </div>
    </FormProvider>
  );
};

export default Checkout;
