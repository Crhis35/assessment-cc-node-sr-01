# Dice Numbers Calculator

You will receive three differente values as parameters, each value represents a single dice number. Your goal is to calculate the final result for this dices play.

If you receive three dices with the same number, you should return the number multiplied by 3. If the result is two numbers equals, you should return the number multiplied by 2. If there are no equal numbers, you should return the biggest of them.

### Input and Output

Based on the explanation above, you will receive inputs like the examples below:

```
Example 1:
- Dice 1: 1
- Dice 2: 2
- Dice 2: 3

Example 2:
- Dice 1: 4
- Dice 2: 1
- Dice 2: 4

Example 1:
- Dice 1: 3
- Dice 2: 3
- Dice 2: 3
```

Based on the examples above, you should return the value that represents the correct number value.

```
Example 1: 3
Example 2: 8
Example 3: 9
```

The example 1 will return 3 because there are no equal numbers, and 3 is the biggest value. On the example 2 will return 8, because there are two equal dices. And the last example will return 9, because there are three equal dices.

Note: You have to be careful with numbers out of a dice range (which is from 1 to 6).
