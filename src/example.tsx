export const divide = (dividend: number, divisor: number) => {
  const absDividend = Math.abs(dividend);
  const dividendIsNegative = dividend != absDividend;
  const absDivisor = Math.abs(divisor);
  const divisorIsNegative = divisor != absDivisor;

  const clip = (input: number) => {
    if (input > 0 && input > 2147483647) {
      return 2147483647;
    }

    if (input < 0 && input < -2147483647) {
      return -2147483647;
    }

    return input;
  };

  if (divisor)
    if (divisor === 0) {
      return 0; // or what? throw? Nan?
    }
  if (divisor === dividend) {
    return 1;
  }
  if (absDivisor === 1) {
    return divisorIsNegative != dividendIsNegative
      ? 0 - clip(absDividend)
      : clip(absDividend);
  }
  if (absDivisor > absDividend) {
    return 0;
  }

  // naive add to count implementation
  let count = 0;
  let accumulatedTotal = 0;
  while (accumulatedTotal + absDivisor <= absDividend) {
    accumulatedTotal += absDivisor;
    count++;
  }

  count = clip(count);

  return divisorIsNegative != dividendIsNegative ? 0 - count : count;
};
