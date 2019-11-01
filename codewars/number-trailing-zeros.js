/* 
Calculate the number of trailing zeros for the value of a factorial.

factorial: n! = n(n-1) ... 2*1
4! = 4 * 3 * 2 * 1
Steps
calculate factorial value
check if value of last index is 0, if so, increment the zero variable
*/

// apparently the number of zeros is a function of how many times 5 and 2 can divide into a number
function zeros(n) {
  let denominator = 1;
  let result = 0;

  while (denominator <= n) {
    result = Math.floor(result + n / (denominator *= 5));
  }
  return result;
}

/*
Original attempt -> doesn't work for higher numbers.

function zeros (n) {
  const number = factorial(n);
  let result = 0;
  function factorial (n) {
    return n ? n * factorial(n - 1) : 1;
  }
  numStr = number.toString();
  console.log(numStr);
  for (let i = numStr.length - 1; i >= 0 ; i--) {
    if (numStr[i] !== '0') {
      break;
    } else {
      result += 1;
    }
  }
  console.log(result);
}

*/
