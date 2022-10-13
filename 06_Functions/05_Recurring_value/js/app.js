const numbers = [9, 5, 4, 3, 5, 7, 4];
function indexOfRepeatedValue(array) {
  let values = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < values.length; j++) {
      if (values[j] === array[i]) {
        return values.indexOf(values[j]);
      }
    }
    values.push(array[i]);
  }
}
indexOfRepeatedValue(numbers);
console.log(indexOfRepeatedValue(numbers))