# Find Least Cost Path

You will receive a bidimensional array of numbers, and your goal here is to find the least cost path to the array's last item.
You can move to the right, left, up, and down but can not navigate on the diagonal.

### Input and Output

You will receive an input like the one below:

```
[[42, 51, 22, 10,  0],
[2,  50, 7,  6,   15],
[4,  36, 8,  30,  20],
[0,  40, 10, 100, 1]]
```

Based on the input above, you will return the sum of all the indexes to get at the end, with the least cost paths, which is the following:

```
140

// The least costly path to the last item is this:
// 42 -> 2 -> 4 -> 36 -> 8 -> 7 -> 6 -> 15 -> 20 -> 1
```
