/*
The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

each 2 digits of hex representation represent each color.  (first x 16 + second x 1)
*/

function rgb(r, g, b) {
  let adjustedArr = [r, g, b];
  for (val in adjustedArr) {
    if (adjustedArr[val] > 255) {
      adjustedArr[val] = 255;
    } else if (adjustedArr[val] < 0) {
      adjustedArr[val] = 0;
    }
  }

  arr = [];
  for (val of adjustedArr) {
    const a = Math.floor(val / 16);
    const b = val - a * 16;
    arr.push(a, b);
  }

  const alpha = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
  for (i in arr) {
    if (arr[i] < 0) {
      arr[i] = 00;
    } else if (arr[i] > 9) {
      arr[i] = alpha[arr[i]];
    }
  }
  result = arr.join("");
  return result;
}

rgb(300, 255, 255);
