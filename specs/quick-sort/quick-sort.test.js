/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  // base case. Array is of length 0 or 1
  if (nums.length < 2) {
    // returns the nums
    return nums;
  }

  // defines the pivot as the last item in the nums
  const pivot = nums.pop();

  if (pivot === undefined) {
    return nums;
  }
  // create 2 arrays
  const lessThanArray = [];
  const greaterThanArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      // less than array (anything less than the pivot)
      lessThanArray.push(nums[i]);
    } else {
      // greater than array (anything greater than or equal to the pivot)
      greaterThanArray.push(nums[i]);
    }
  }
  // concatenates the arrays with the pivot between

  return quickSort(lessThanArray).concat([pivot], quickSort(greaterThanArray));
}

// unit tests
// do not modify the below code
test("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
