/*
Nth Fibonacci
The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is 1, and the nth number is the sum of the (n-1)th and (n-2)th numbers.  Write a function that takes in an integer n and returns the nth Fibonacci number

Sample input: 6
Sample output: 5(0,1,1,2,3,5)

Steps:
1) create an array of numbers with length n
2) 0th index is 0, 1st index is 1, and the following are the sum of the previous 2 index values
3) take the value of the nth index
*/

function getNthFib(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n - 1];
}

getNthFib(8);
