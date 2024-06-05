/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

function merge(arrayOne, arrayTwo) {
  const newArray = [];
  do {
    if (
      (arrayTwo.length === 0 && arrayOne.length > 0) ||
      arrayOne[0] < arrayTwo[0]
    ) {
      newArray.push(arrayOne[0]);
      arrayOne.shift();
    } else {
      newArray.push(arrayTwo[0]);
      arrayTwo.shift();
    }
  } while (arrayOne.length > 0 || arrayTwo.length > 0);

  return newArray;
}

const mergeSort = (nums) => {
  if (nums.length === 1) {
    // return sorted list of length 1
    return nums;
  } else {
    // array need to be split again
    // split and call mergeSort twice with new split arrays
    let midpoint = Math.floor(nums.length / 2);
    let firstHalf;
    let secondHalf;

    if (nums.length % 2 === 0) {
      // If the array length is even
      firstHalf = nums.slice(0, midpoint);
      secondHalf = nums.slice(midpoint);
    } else {
      // If the array length is odd
      firstHalf = nums.slice(0, midpoint + 1);
      secondHalf = nums.slice(midpoint + 1);
    }
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
