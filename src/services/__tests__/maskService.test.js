import { cardNumberMask, cardDateMask, currencyMask, removeMask } from '../maskService';

test('should return Card Number with mask', () => {
  expect(cardNumberMask('4111111111111111')).toBe('4111 1111 1111 1111');
});

test('should return date with MM/YY format', () => {
  expect(cardDateMask('1234')).toBe('12/34');
});

test('should remove mask correctly', () => {
  expect(removeMask('(27) 99999-9999')).toBe('27999999999');
});

test('should return BRL currency', () => {
  expect(currencyMask('100')).toBe('R$ 100,00');
});

test('should return empty string if no value is passed', () => {
  expect(currencyMask()).toBe('');
});
