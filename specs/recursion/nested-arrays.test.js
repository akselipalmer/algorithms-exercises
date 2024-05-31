/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7
 
 */

function addItems(array, location, total) {
  if (location === array.length) {
    return total;
  }
  if (typeof array[location] !== "number") {
    const newTotal = total + addItems(array[location], 0, 0);
    const newLocation = location + 1;
    return addItems(array, newLocation, newTotal);
  }
  const newTotal = total + array[location];
  const newLocation = location + 1;
  return addItems(array, newLocation, newTotal);
}

function nestedAdd(array) {
  // write code here
  return addItems(array, 0, 0);
}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});
