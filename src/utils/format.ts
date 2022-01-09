const format = (value: number): string => {
  const numberFormat = new Intl.NumberFormat(`en-US`);
  return numberFormat.format(value);
};

export default format;
