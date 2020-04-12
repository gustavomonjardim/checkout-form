import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { cardNumberMask } from '../../services/maskService';

afterEach(() => {
  jest.clearAllMocks();
});

import TextInput from '.';

const email = '';
const onChange = jest.fn();
const onBlur = jest.fn();

const tree = (
  <TextInput
    id="email"
    placeholder="email@provedor.com"
    label="E-mail"
    value={email}
    onChange={onChange}
    onBlur={onBlur}
  />
);

test('should call onBlur function when input is blurred', () => {
  const { getByLabelText } = render(tree);

  fireEvent.blur(getByLabelText('E-mail'));

  expect(onBlur).toHaveBeenCalledTimes(1);
});

test('should call onChange function with correct text when input is changed', () => {
  const { getByLabelText } = render(tree);

  fireEvent.change(getByLabelText('E-mail'), { target: { value: '1234' } });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith('1234');
});

test('should display error message when there is an error', () => {
  const error = 'ocorreu um erro';

  const { getByText } = render(
    <TextInput
      id="email"
      placeholder="email@provedor.com"
      label="E-mail"
      value={email}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
    />
  );

  const errorMessage = getByText(error);

  expect(errorMessage).toBeInTheDocument();
});

test('should format input correctly', () => {
  const cardNumber = '';
  const { getByLabelText } = render(
    <TextInput
      id="cardNumber"
      placeholder="0000 0000 0000 0000"
      label="Número do cartão"
      formatText={(current) => cardNumberMask(current, cardNumber)}
      value={cardNumber}
      onChange={onChange}
      onBlur={onBlur}
    />
  );

  fireEvent.change(getByLabelText('Número do cartão'), { target: { value: '4111111111111111' } });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith('4111 1111 1111 1111');
});
