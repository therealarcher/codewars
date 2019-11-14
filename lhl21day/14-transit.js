/*
Instructions
We'll be implementing a function called dynamicPricing(), which will return the cost of a particular trip given the number of people on the bus, and the distance traveled by the passenger. This function receives two numbers: numberOfPeople and distanceTraveled.

The base ticket price is $1. Passengers will be charged $0.25 per kilometer. If there are 30 or more people on the bus, there should be $0.25 added to the total.

The value that your functions returns must be a string, formatted as such: $4.25. Your values must be shown to two decimal points of precision.

Examples
Input:

    const numberOfPeople = 15
    const distanceTraveled = 10
    
Output:
$3.50
Input:

    const numberOfPeople = 35
    const distanceTraveled = 5
    
Output:
$2.50
*/

const dynamicPricing = (numberOfPeople, distanceTraveled) => {
  const premiumPrice = numberOfPeople >= 30 ? 0.25 : 0.0;
  const totalFare = 1.0 + distanceTraveled * 0.25 + premiumPrice;
  return "$" + totalFare.toFixed(2);
};
