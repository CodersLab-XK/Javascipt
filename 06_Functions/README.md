![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Creating an array

Create a function `createArray(rows)` that creates and returns an array. Its size should be consistent with the parameter `rows`, and each subsequent element contains consecutive integers beginning with `1`.

Try to call this function with the argument `5`.


## Displaying array

Create the function `printArray(array)` which displays successive values from the passed array.

Call a function for this array and check the result in the console:

```js
const people = ["John", "Eve", "Donna", "Chris"];
```


## Displaying a 2D array

Create a `printArray2D(array2D)` function which displays successive values from the passed two-dimensional array.

Test the function on this array:

```js
const users = [
  ["John", "Newman"],
  ["Zander","Branson"]
];
```


## Maximum value

Create a function `maxFromArray(numbers)` which takes an array of numbers. The function should **return** the highest value from the set (variable `randomNumbers`);

Assign the result of the action to a variable and display it in the console.


## Repeated value

Create function `indexOfRepeatedValue(array)`. Pass an array of 10 arbitrary numbers (let several be the same) to it. Create in it a variable named ```firstIndex```. In the ```for``` loop, check which number repeats first and assign its index to the ```firstIndex``` variable. Then display this variable in the console, outside the ```for``` loop.

Sample array:

```js
const numbers = [2, 4, 5, 2, 3, 5, 1, 2, 4];
```

In this array, the number 2 is repeated first, so the variable ```firstIndex``` should be 0, because this is the first number in the array that has a double somewhere.
Test your script with different values in the array.

Return the value of `firstIndex` from the function.

*Hint: Remember to break the loop appropriately.*
