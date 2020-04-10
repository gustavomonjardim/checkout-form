import React, { useState } from 'react';

import TextInput from '../TextInput';

const CheckoutForm = () => {
  const [cardNumber, setCardNumber] = useState('');

  return (
    <div className="w-full max-w-screen-lg h-screen max-h-screen md:h-auto flex flex-row flex-wrap md:mx-8 bg-white border border-solid border-gray-400">
      <div className="w-full md:w-1/3 bg-primary md:h-full"></div>
      <div className="w-full md:w-2/3 bg-white md:h-full p-12 md:px-16">
        <TextInput
          value={cardNumber}
          onChange={setCardNumber}
          id="cardNumber"
          placeholder="Número do cartão"
          label="Número do cartão"
        />
      </div>
    </div>
  );
};

export default CheckoutForm;
