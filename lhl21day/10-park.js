/*
Instructions
We need to write a function called whereCanIPark() that returns the coordinates of an available parking spot for the vehicle, or returns false if there is no available spot. Our function receives an array of arrays representing parking spots, and a string with type of the vehicle that is looking for a parking spot.

There are three kinds of possible vehicles: regular cars, small cars, and motorcycles. Regular cars can only park in R spots. Small cars can park in R or S spots. Motorcycles can park in R, S, or M spots. In the array of parking spots, spots are written in both lower-case and upper-case. An upper-case letter means that the particular spot is AVAILABLE, while lower-case letters mean that the spot is UNAVAILABLE.

Our function must return an array with the coordinates of the spot as an [X, Y] pair. See the example input and output below for an illustration.

Note: There may be multiple available spots for a particular vehicle. It does not matter which spot your function chooses, as long as the spot is available. And if there are no available spots, remember to return false.

Examples
Input:

    const spots = [
      // COLUMNS ARE X
      //    0    1    2    3    4    5
          ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
          ['s', 'M', 's', 'S', 'R', 'M'], // 1
          ['s', 'M', 's', 'S', 'R', 'm'], // 2
          ['S', 'r', 's', 'm', 'R', 'M'], // 3
          ['S', 'r', 's', 'm', 'R', 'M'], // 4
          ['S', 'r', 'S', 'M', 'M', 'S'], // 5
      ]

      const vehicle = 'regular' // possible options are 'regular', 'small', or 'motorcycle'
    
Output:
[4, 0]
*/

const whereCanIPark = (spots, vehicle) => {
  let requiredSpot;
  vehicle === "regular"
    ? (requiredSpot = "R")
    : vehicle === "small"
    ? (requiredSpot = ["S", "R"])
    : (requiredSpot = ["M", "S", "R"]);
  console.log("required spot: ", requiredSpot);

  for (let y = 0; y < spots.length; y++) {
    let rowVals = spots[y];
    for (let x = 0; x < rowVals.length; x++) {
      if (requiredSpot.includes(rowVals[x])) {
        console.log([x, y]);
        return [x, y];
      }
    }
  }
  return false;
};

const spots = [
  // COLUMNS ARE X
  //    0    1    2    3    4    5
  ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
  ["s", "M", "s", "S", "R", "M"], // 1
  ["s", "M", "s", "S", "R", "m"], // 2
  ["S", "r", "s", "m", "R", "M"], // 3
  ["S", "r", "s", "m", "R", "M"], // 4
  ["S", "r", "S", "M", "M", "S"] // 5
];

const vehicle = "small";

whereCanIPark(spots, vehicle);
