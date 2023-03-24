import CurrencyTransformer from '../transformer/CurrencyTransformer';

const formatter = CurrencyTransformer('en-US', 'USD', false);
const compactFormatter = CurrencyTransformer('en-US', 'USD', true);

export const NumberRenderer = (value: number) => {
  if (value > 999999) {
    return compactFormatter.format(value);
  } else if (value === 0) {
    return '-';
  } else {
    return formatter.format(value);
  }
};
