import StringMask from 'string-mask';

const format = (value, prevValue, ...props) => {
  const valueClean = value.replace(/\D/g, '');
  if (prevValue !== undefined) {
    if (value.length <= prevValue.length) {
      return value;
    }
  }
  const formatter = new StringMask(...props);
  return formatter.apply(valueClean);
};

const cardNumberMask = (value, prevValue) => {
  return format(value, prevValue, '0000 0000 0000 0000');
};

const cardDateMask = (value, prevValue) => {
  return format(value, prevValue, '00/00');
};

const currencyMask = (str) => {
  if (str === null || str === undefined) {
    return '';
  }

  return `R$ ${parseFloat(str).toFixed(2).replace('.', ',')}`;
};

const removeMask = (data) => data?.replace(/\D/g, '');

export { cardNumberMask, cardDateMask, currencyMask, removeMask };
