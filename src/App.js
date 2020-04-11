import React, { useState } from 'react';

import './styles/global.css';
import CheckoutForm from './components/CheckoutForm';
import { FormProvider } from './context/FormContext';
import { paymentValidation } from './services/paymentValidation';

function App() {
  const [paymentData] = useState({
    cardNumber: '',
    fullName: '',
    expirationDate: '',
    cvv: '',
    installments: 1,
  });

  const submitPaymentData = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-gray-100 min-w-screen min-h-screen flex items-center justify-center antialiased font-sans">
      <FormProvider
        initialValues={paymentData}
        onSubmit={submitPaymentData}
        validationSchema={paymentValidation}
      >
        <CheckoutForm />
      </FormProvider>
    </div>
  );
}

export default App;
