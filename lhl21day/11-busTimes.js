/*
Instructions
For this challenge, we'll implement a function called busTimes(). This function will calculate the arrival time for a collection of busses based on their current speed and distance from the stop. It will receive an object called buses, which contains a series of objects for each bus, with the distance of the bus and the speed that the bus is traveling at. Our function should return a new object that shows how long until each bus arrives at the stop.

*/

const busTimes = buses => {
  let result = {};
  for (let location in buses) {
    let values = buses[location];
    let calc = values.distance / values.speed;
    result[location] = calc;
  }
  console.log(result);
  return result;
};

const buses = {
  pickadilly: {
    distance: 10,
    speed: 5
  },
  uptown: {
    distance: 13,
    speed: 10
  }
};

busTimes(buses);

// Expected Output:

// {
//   pickadilly: 2,
//   uptown: 1.3
// }
