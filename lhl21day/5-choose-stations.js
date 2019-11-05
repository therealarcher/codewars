/*
Instructions
Complete the function chooseStations(stations) that takes in an array of possible voting stations, and then only returns the names of the stations that are appropriate.

Your function will receive an array of stations, where each station itself is an array with a name, a capacity, and a venue type.

In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

Examples
Input:

    const stations = [
      ['Big Bear Donair', 10, 'restaurant'],
      ['Bright Lights Elementary', 50, 'school'],
      ['Moose Mountain Community Centre', 45, 'community centre']
    ];
    
Output:
['Bright Lights Elementary', 'Moose Mountain Community Centre']
*/

const chooseStations = stations => {
  let suitableVenues = [];
  for (let station of stations) {
    if (
      station[1] >= 20 &&
      (station[2] === "school" || station[2] === "community centre")
    ) {
      suitableVenues.push(station[0]);
    }
  }
  return suitableVenues;
};

chooseStations([
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"]
]);
