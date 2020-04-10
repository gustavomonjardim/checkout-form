import moment from 'moment';

const parseAndFormatDate = (date, originalFormat, format) =>
  moment(date, originalFormat).format(format);

const validateExpirationDate = (date) => {
  const parsedDate = moment(date, 'MM/YY');
  if (moment() > parsedDate) {
    return false;
  }
  return true;
};

export { validateExpirationDate, parseAndFormatDate };
