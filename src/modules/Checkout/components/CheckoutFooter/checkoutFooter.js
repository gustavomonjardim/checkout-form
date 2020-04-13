import propTypes from 'prop-types';
import React, { useState, useMemo } from 'react';

import Button from '../../../../components/Button';
import { useForm } from '../../../../context/FormContext';
import { pay } from '../../../../services/apiService';

const CheckoutFooter = ({ step, setStep }) => {
  const [loading, setLoading] = useState(false);
  const { submitForm } = useForm();

  const buttonText = useMemo(() => {
    if (step === 2) {
      return 'Pagar';
    }
    if (step === 3) {
      return 'Comprar novamente';
    }
    return 'Continuar';
  }, [step]);

  const handlePayment = async () => {
    setLoading(true);
    const [err, res] = await pay('data');
    setLoading(false);

    if (err) {
      return;
    }

    console.log(res);
    setStep(step + 1);
  };

  const handleClick = async () => {
    if (step === 0) {
      setStep(step + 1);
      return;
    }

    if (step === 1) {
      submitForm();
      return;
    }

    if (step === 2) {
      handlePayment();
      return;
    }

    if (step === 3) {
      setStep(0);
      return;
    }
  };

  return (
    <div className="w-full mt-10 flex justify-center md:justify-end">
      <div className="w-64">
        <Button text={buttonText} onClick={handleClick} loading={loading} />
      </div>
    </div>
  );
};

CheckoutFooter.propTypes = {
  step: propTypes.number.isRequired,
  setStep: propTypes.func.isRequired,
};

export default CheckoutFooter;
