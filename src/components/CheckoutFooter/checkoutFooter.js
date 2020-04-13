import propTypes from 'prop-types';
import React from 'react';

import { useForm } from '../../context/FormContext';
import Button from '../Button';

const CheckoutFooter = ({ step, setStep }) => {
  const { submitForm } = useForm();

  const handleClick = () => {
    if (step === 0) {
      setStep(step + 1);
      return;
    }

    if (step === 1) {
      submitForm();
      return;
    }

    if (step === 2) {
      console.log('pagando...');
    }
  };
  return (
    <div className="w-full mt-10 flex justify-center md:justify-end">
      <div className="w-64">
        <Button text={step === 2 ? 'Pagar' : 'Continuar'} onClick={handleClick} loading={false} />
      </div>
    </div>
  );
};

CheckoutFooter.propTypes = {
  step: propTypes.number.isRequired,
  setStep: propTypes.func.isRequired,
};

export default CheckoutFooter;
