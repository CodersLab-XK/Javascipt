![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Strings

Create two variables that contain strings: “Hello” and "JS".

In a new variable combine the two strings, but separate them by a space.

Print out the created string in the console.


## Variables

Create 6 variables. Assign the following data to them:

* number
* string
* number + string, e.g. (2 + "two")
* boolean
* special value

Add a comment to each variable with information about what type of data this variable holds (use the ```typeof``` operator to check the type). Write the values of these variables in the console.


Example:
```js
const numberOfUsers = 23;
console.log(numberOfUsers);
console.log(typeof numberOfUsers);
//This variable's type is number, and it stores the value 23
```


## Arrays of names

### Exercise 1

Define an array in a variable named `names1` that will contain the following names: `John, Maria, Kate, Will, Zane`

Then, display in the terminal in subsequent lines:

- the second element
- the fifth element
- array length


### Exercise 2

Define an empty array in a variable named `names2`, then add the following names to it **one by one**:

```
John, Maria, Kate, Will, Zane, Greg
```

Then, display in the terminal:

- the first element
- the third element
- array length


## 2D array

### Exercise 1

Create a 2-dimensional array with 3 rows and 4 columns (in a variable named `arrayOfNumbers`).

Consecutive integers should be entered in subsequent columns, so that the array looks like this:
```
1,2,3,4
5,6,7,8
9,10,11,12
```

Display:
- the second element of the first row
- the second row (the second element of the first dimension)
- length of the third element of the first dimension


### Exercise 2

Create a 2-dimensional array (in a variable named `mixedArray`) that will contain:

- an array of names: `Maria`, `John`, `Peter`
- an array of integers: `1, 2, 3, 4, 5, 6`

Display:
- the third element of the first row
- the fifth element of the first row
- the length of the second element of the first dimension


## Objects

### Car

In a variable named `car` create an object describing a car.

It should have the following attributes:

- **type** - "sedan"
- **color** - "green"
- **engine** - 2.0

Using concatenation (with a space as separator) display information about the object retrieved from the values of its attributes: **type**, **color**, **engine**.


### Color

Create an object describing color in a variable named `color`.

It should have the following attributes:
- **red** value: 100
- **green** value: 0
- **blue** value: 50

Using a variable named **referenceColor**, modify the previous object to set:

- **red** value: 50
- **green** value: 50
