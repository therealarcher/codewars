/*
The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

each 2 digits of hex representation represent each color.  (first x 16 + second x 1)
*/

// to account for values less than 0 and/or more than 255
function rgb(r, g, b) {
  let adjustedArr = [r, g, b];
  for (val in adjustedArr) {
    if (adjustedArr[val] > 255) {
      adjustedArr[val] = 255;
    } else if (adjustedArr[val] < 0) {
      adjustedArr[val] = 0;
    }
  }

  // to create the hex values
  arr = [];
  for (val of adjustedArr) {
    const a = Math.floor(val / 16);
    const b = val - a * 16;
    arr.push(a, b);
  }

  // joining the values and converting values greater than 9 into alpha
  const alpha = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
  for (i in arr) {
    if (arr[i] < 0) {
      arr[i] = 00;
    } else if (arr[i] > 9) {
      arr[i] = alpha[arr[i]];
    }
  }
  result = arr.join("");
  // console.log(result);
  return result;
}

// a simpler and more clever solution I found online.
// I didn't know of the "toString(16) feature when finding my own solution."

// function rgb(r, g, b) {
//   function toHex(a) {
//     if (a <= 0) return "00";
//     else if (a >= 255) return "FF";
//     else return a.toString(16).toUpperCase();
//   }
//   return toHex(r) + toHex(g) + toHex(b);
// }

rgb(148, 0, 211);
