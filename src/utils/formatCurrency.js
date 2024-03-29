const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});

export const formatCurrency = (value) => {
  return CURRENCY_FORMATTER.format(value);
};
