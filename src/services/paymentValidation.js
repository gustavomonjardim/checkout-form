import * as Yup from 'yup';

import { validateExpirationDate } from './dateService';

function validateCreditCard(cardNumber) {
  if (!cardNumber || cardNumber.length < 16) {
    return false;
  }
  if (cardNumber[0] === '0' || cardNumber[0] === '1' || cardNumber[0] === '2') {
    return false;
  }
  return true;
}

export { validateCreditCard };

const paymentValidation = Yup.object({
  fullName: Yup.string()
    .ensure()
    .required('Por favor, informe o seu nome completo.')
    .matches(
      /^[A-Za-zÀ-ú'’]{2,}(?: [A-Za-zÀ-ú'’]+){1,20}$/,
      'Por favor, informe o seu nome completo.'
    ),
  cardNumber: Yup.string()
    .ensure()
    .required('Por favor, informe o número do cartão.')
    .length(19, 'Por favor, informe o número do cartão.')
    .test('isValid', 'Por favor, informe um número de cartão válido.', validateCreditCard),
  expirationDate: Yup.string()
    .ensure()
    .required('Por favor, informe a data de validade do cartão.')
    .length(5, 'Por favor, informe a data de validade do cartão.')
    .test('isValid', 'Data de validade expirada.', validateExpirationDate),
  cvv: Yup.string()
    .ensure()
    .required('Por favor, informe o código de segurança do cartão.')
    .length(3, 'Por favor, informe o código de segurança do cartão.'),
  installments: Yup.number()
    .required('Por favor, informe o número de parcelas.')
    .min(1, 'O número de parcelas deve ser pelo menos 1.')
    .max(12, 'O número de parcelas deve ser no máximo 12.'),
});

export { paymentValidation };
