/*
At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears

Steps:
1) if lengths of part1 and part 2 do not equal the length of s, return false
2) loop through each character in 's' and see if it exists as the first/next index in 'part1' or 'part 2'
3) if neither fit, return false
4) if one does, increment the index value and go to the next value in s
*/

function isMerge(s, part1, part2) {
  console.log("s: ", s, "part1: ", part1, "part2: ", part2);
  // check string lengths
  if (s.length !== part1.length + part2.length) {
    console.log("string lengths do not equal");
    return false;
  }

  let i1 = 0;
  let i2 = 0;
  for (char of s) {
    console.log(char);
    if (char === part1[i1]) {
      i1 += 1;
    } else if (char === part2[i2]) {
      i2 += 1;
    } else {
      console.log("false!");
      return false;
    }
  }
  console.log("true overall");
  return true;
}

isMerge("codewars", "co de", "wa rs");
isMerge("codewars", "cdw", "oears");

// this didn't pass all of the tests :( I will have to revisit this.
// the solution below is neat and it does pass all the tests:

/*
function isMerge(s, part1, part2) {
  var stack = [[s, part1, part2]];

  if (s.length !== part1.length + part2.length) {
      return false;
  }

  while (stack.length) {
      [s, part1, part2] = stack.shift();

      if (!s.length) {
          return true;
      }

      if (part1[0] === s[0]) {
          stack.push([s.slice(1), part1.slice(1), part2]);
      }

      if (part2[0] === s[0]) {
          stack.push([s.slice(1), part1, part2.slice(1)]);
      }
  }
  return false;
};

*/
