export const diceFacesCalculator = (...input: number[]): number => {
  if (input.filter((num) => num > 6 || num <= 0).length > 0) {
    throw new Error('Dice out of number range');
  }
  const unique = [...new Set(input)];

  if (unique.length === 1) {
    return unique[0] * 3;
  } else if (unique.length === 2) {
    return input.filter((num, idx) => input.indexOf(num) !== idx)[0] * 2;
  } else {
    return Number(unique.sort().at(-1));
  }
};
