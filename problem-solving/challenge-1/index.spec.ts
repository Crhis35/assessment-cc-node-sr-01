import { numbersFractionCalculator } from './index';

describe('Challenge 1', () => {
  it('Test Case 1', () => {
    const values = numbersFractionCalculator([-4, 3, -9, 0, 4, 1]);

    expect(values).toHaveProperty('positives', (0.5).toFixed(6));
    expect(values).toHaveProperty('negative', (0.333333).toFixed(6));
    expect(values).toHaveProperty('zeros', (0.166667).toFixed(6));
  });

  it('Test Case 2', () => {
    const values = numbersFractionCalculator([
      -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
    ]);

    expect(values).toHaveProperty('positives', (0.0).toFixed(6));
    expect(values).toHaveProperty('negative', (1.0).toFixed(6));
    expect(values).toHaveProperty('zeros', (0.0).toFixed(6));
  });

  it('Test Case 3', () => {
    const values = numbersFractionCalculator([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

    expect(values).toHaveProperty('positives', (1.0).toFixed(6));
    expect(values).toHaveProperty('negative', (0.0).toFixed(6));
    expect(values).toHaveProperty('zeros', (0.0).toFixed(6));
  });

  it('Test Case 4', () => {
    const values = numbersFractionCalculator([4, -1, 0]);

    expect(values).toHaveProperty('positives', (0.333333).toFixed(6));
    expect(values).toHaveProperty('negative', (0.333333).toFixed(6));
    expect(values).toHaveProperty('zeros', (0.333333).toFixed(6));
  });

  it('Test Case 5', () => {
    const values = numbersFractionCalculator([
      -100, 100, 0, 0, 0, -100, 100, 0, -100, 100, 100, 0, 0, 0, 0, -100, -100,
      -100, 0, -100, 0, 100, 100, -100, -100, 100, 100, 100, 100, -100, -100,
      -100, -100, 100, 0, 0, 100, 0, 0, -100, -100, -100, -100, -100, -100, 100,
      100, 0, 100, 100, -100, -100, -100, 0, 100, -100, 0, 100, 100, -100, 100,
      -100, 0, -100, -100, 100, 0, 0, -100, 0, -100, -100, 100, -100, 100, 0,
      100, -100, -100, -100, 100, 100, 100, 100, 0, -100, 0, 100, 100, 100, 0,
      -100, -100, 0, 0, 100, 0, -100, 100, 100,
    ]);

    expect(values).toHaveProperty('positives', (0.34).toFixed(6));
    expect(values).toHaveProperty('negative', (0.38).toFixed(6));
    expect(values).toHaveProperty('zeros', (0.28).toFixed(6));
  });

  it('Test Case 6', () => {
    const values = numbersFractionCalculator([
      -6, 1, 79, 17, 64, 94, 87, -77, 0, -26, 2, -94, 87, -81, -73, -28, 43, 0,
      -35, 39, -37, -49, -29, 93, 64, 54, 0, -73, -58, -100, 33, -75, -47, 35,
      -7, 0, 52, -37, -99, 58, -23, 70, -52, 18, 0, -79, -38, 45, -61, 45, 51,
      -48, 32, 0, -44, -56, 29, -74, -1, 92, -93, 23, 0, 55, -31, 75, -43, 20,
      19, 58, -4, 0, 59, -80, 18, -74, 81, 63, 62, -92, 0, -23, 7, -91, 22, -1,
      38, -73, 79, 0, -2, 90, 80, 74, -74, -85, -48, 31, 0, -80,
    ]);

    expect(values).toHaveProperty('positives', (0.44).toFixed(6));
    expect(values).toHaveProperty('negative', (0.45).toFixed(6));
    expect(values).toHaveProperty('zeros', (0.11).toFixed(6));
  });

  it('Test Case 7', () => {
    const values = numbersFractionCalculator([
      0, -67, -74, -38, -72, -53, 0, -13, -95, -91, -100, -59, 0, -10, -68, -71,
      -62, -21, 0, -42, -57, -16, -66, -23, 0, -80, -63, -68, -65, -71, 0, -71,
      -15, -32, -26, -8, 0, -6, -51, -87, -19, -71, 0, -93, -26, -35, -56, -89,
      0, -21, -74, -39, -57, -8, 0, -69, -29, -24, -99, -53, 0, -65, -42, -72,
      -18, -4, 0, -73, -46, -63, -78, -87,
    ]);

    expect(values).toHaveProperty('positives', (0).toFixed(6));
    expect(values).toHaveProperty('negative', (0.833333).toFixed(6));
    expect(values).toHaveProperty('zeros', (0.166667).toFixed(6));
  });

  it('Test Case 8', () => {
    const values = numbersFractionCalculator([
      -76, -33, 0, -37, 39, 0, 33, -10, 0, 57, 59, 0, -14, -57, 0, -96, 45, 0,
      -60, 82, 0, -94, -31, 0, -68, -53, 0, -57, 100, 0, 35, 81, 0, -4, 76, 0,
      15, 60, 0, 2, -85, 0, 16, -70, 0, 62, -25, 0, 4, -89, 0, -79, -80, 0, -23,
      97, 0, 69, -68, 0, -83, -57, 0, 74, 1, 0, -66, 23, 0, 68, -80, 0, 100, 10,
      0, -73, -54, 0, 0, 4, 0, -8, -86, 0, 58, -85, 0, -100, -100, 0, 43, 61, 0,
      61, -86, 0, 24, -95, 0, -54,
    ]);

    expect(values).toHaveProperty('positives', (0.3).toFixed(6));
    expect(values).toHaveProperty('negative', (0.36).toFixed(6));
    expect(values).toHaveProperty('zeros', (0.34).toFixed(6));
  });

  it('Test Case 9', () => {
    const values = numbersFractionCalculator([
      -92, -21, -93, -27, -45, -63, 53, 45, 0, 6, -67, 84, 96, 86, 18, 36, 53,
      0, 47, 88, 91, -59, 65, 62, 3, 13, 0, -49, -47, 94, -63, 65, -23, 48, -5,
      0, -10, 67, -23, 19, -11, 46, 80, -83, 0, -40, 74, -63, -20, -72, 98, -72,
      66, 0, -58, -1, 67, -22, 8, -45, 32, -65, 0, -10, -65, -81, -36, -55, -99,
      -18, -82,
    ]);

    expect(values).toHaveProperty('positives', (0.408451).toFixed(6));
    expect(values).toHaveProperty('negative', (0.492958).toFixed(6));
    expect(values).toHaveProperty('zeros', (0.098592).toFixed(6));
  });

  it('Test Case 10', () => {
    const values = numbersFractionCalculator([
      0, 100, 35, 0, 94, 40, 42, 87, 59, 0,
    ]);

    expect(values).toHaveProperty('positives', (0.7).toFixed(6));
    expect(values).toHaveProperty('negative', (0).toFixed(6));
    expect(values).toHaveProperty('zeros', (0.3).toFixed(6));
  });
});
