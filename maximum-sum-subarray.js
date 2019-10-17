/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

Steps:
1) create 2 variables, maxSum and currentSum
2) Loop over array.  For each loop, check:
  a) If sum of any sequence of values is less than zero, start new subsequence.
  b) compare currentSum with maxSum values.  Store maxSum value.
*/

var maxSequence = function(arr) {
  let currentSum = 0;
  let maxSum = 0;

  for (i in arr) {
    let currentNum = arr[i];
    // check running total of current.  If below zero, give currentSum a value of zero, thus starting a new subsequence.
    currentSum = Math.max(currentNum + currentSum, 0);
    // compare current sum of contiguous subsequence to maxSum and choose max value
    maxSum = Math.max(currentSum, maxSum);
  }
  console.log(maxSum);
  return maxSum;
};

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSequence([-5, -8, -1, -1, -5]);
maxSequence([1, 3, 5, 7, 9]);
