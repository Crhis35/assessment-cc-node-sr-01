import { diceFacesCalculator } from './index';

describe('Challenge 2', () => {
  it('Test Case 1', () => {
    const value = diceFacesCalculator(6, 6, 6);
    expect(value).toBe(18);
  });

  it('Test Case 2', () => {
    const value = diceFacesCalculator(5, 5, 5);
    expect(value).toBe(15);
  });

  it('Test Case 3', () => {
    const value = diceFacesCalculator(1, 2, 3);
    expect(value).toBe(3);
  });

  it('Test Case 4', () => {
    const value = diceFacesCalculator(1, 2, 1);
    expect(value).toBe(2);
  });

  it('Test Case 5', () => {
    const value = diceFacesCalculator(3, 6, 3);
    expect(value).toBe(6);
  });

  it('Test Case 6', () => {
    const value = diceFacesCalculator(6, 5, 4);
    expect(value).toBe(6);
  });

  it('Test Case 7', () => {
    const value = diceFacesCalculator(4, 5, 6);
    expect(value).toBe(6);
  });

  it('Test Case 8', () => {
    const value = () => diceFacesCalculator(7, 6, 5);
    expect(value).toThrow('Dice out of number range');
  });

  it('Test Case 9', () => {
    const value = () => diceFacesCalculator(0, 6, 5);
    expect(value).toThrow('Dice out of number range');
  });

  it('Test Case 10', () => {
    const value = () => diceFacesCalculator(-1, 2, 3);
    expect(value).toThrow('Dice out of number range');
  });
});
