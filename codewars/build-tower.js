/* Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

function towerBuilder(nFloors) {
  let tower = [];
  let numArr = [...Array(nFloors).keys()].map(i => i + 1);

  for (num of numArr) {
    let whiteSpace = " ".repeat(nFloors - num);
    if (num === 1) {
      tower.push(whiteSpace + "*".repeat(num) + whiteSpace);
    } else if (num % 2 === 0) {
      tower.push(whiteSpace + "*".repeat(num * 2 - 1) + whiteSpace);
    } else {
      tower.push(whiteSpace + "*".repeat(num * 2 - 1) + whiteSpace);
    }
  }
  // console.log(tower);
  return tower;
}

towerBuilder(7);
