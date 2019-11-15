/*
Instructions
For this challenge you'll have to implement a function called finalPosition(), which will 
calculate the position of the parade based on an array of directional moves. The parade will
move on an X-Y grid like the following.

Your function will receive an array of moves, which are strings that say either north, 
south, west, or east, these represent the parade moving in a particular direction by a 
single space on the grid. By looking at the path that the parade moves in, your function 
should calculate and then return an array representing the position of the parade after 
completing all of the moves. The first element of the array should be the X position, and 
the second element of the array should be the Y position. The parade begins at [0,0].

Examples
Input:

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
    
Output:
[-1, 4]
*/

const finalPosition = moves => {
  let x = 0;
  let y = 0;
  let yMovement = { north: 1, south: -1 };
  let xMovement = { east: 1, west: -1 };

  for (move of moves) {
    if (move === "east" || move === "west") {
      x += xMovement[move];
    } else {
      if (move === "north" || move === "south") {
        y += yMovement[move];
      }
    }
  }
  return [x, y];
};
