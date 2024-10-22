export const isNumber = (val: unknown): val is number => typeof val === 'number' && !isNaN(val);

export const toNumber = (val: unknown, defaultValue = 0) => {
  if (val === undefined || val === null) {
    return defaultValue;
  }
  if (isNumber(val)) {
    return val;
  }
  const parseVal = parseFloat(val as string);
  return isNumber(parseVal) ? parseVal : defaultValue;
};
