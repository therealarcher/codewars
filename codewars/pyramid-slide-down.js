/*
Lyrics...
Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

   /3/
  \7\ 4 
 2 \4\ 6 
8 5 \9\ 3
Here comes the task...
Let's say that the 'slide down' is a sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

Your task is to write a function longestSlideDown (in ruby: longest_slide_down) that takes a pyramid representation as argument and returns its' longest 'slide down'.

Steps:

1) Take current index and look at the 2 values below it (current index value and current + 1)
2) find the highest number of those 2 and add it to the current value
3) continue until you get to the bottom of the pyramid (length of array - 1)

*/

function longestSlideDown(pyramid) {
  let sum = 0;
  let newIndex = 0;
  for (let i = 0; i < pyramid.length; i++) {
    let max = 0;
    let index = newIndex;
    for (let j = index; j <= index + 1; j++) {
      if (pyramid[i][j] > max) {
        max = pyramid[i][j];
        newIndex = j;
      }
    }

    sum += max;
  }
  console.log(sum);
  return sum;
}

longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]);
longestSlideDown([
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
]);

/*
Other solution I found online
let pyramidSum = [];
  pyramid.forEach((r, i) => {
    pyramidSum.push(r.map((e) => {
      return (i === pyramid.length - 1) ? e : 0;
    }));
  });

  for (let i = pyramidSum.length - 2; i >= 0; i--) {
      for (let j = 0; j < pyramidSum[i].length; j++) {
          pyramidSum[i][j] = pyramid[i][j] + Math.max(pyramidSum[i+1][j], pyramidSum[i+1][j+1]);
      }
  }
  console.log( pyramidSum[0][0]);
}
*/
