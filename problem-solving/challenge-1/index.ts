type Fraction = {
  positives: number;
  negative: number;
  zeros: number;
};

export const numbersFractionCalculator = (numbers: number[]) => {
  const result = numbers.reduce<Fraction>(
    (acc, curr) => {
      if (curr === 0) acc.zeros += 1 / numbers.length;
      else if (curr > 0) acc.positives += 1 / numbers.length;
      else acc.negative += 1 / numbers.length;

      return acc;
    },
    {
      positives: 0,
      negative: 0,
      zeros: 0,
    }
  );
  return {
    positives: result.positives.toFixed(6),
    negative: result.negative.toFixed(6),
    zeros: result.zeros.toFixed(6),
  };
};
