/*
Instructions
For this challenge, we'll need to implement a function called judgeVegetable()that will decide which vegetable is best based on a given judging characteristic. Our function will receive two parameters: a list of veggies(as an array of objects), and a characteristic to judge the veggies by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted (vegetables.submitter) the vegetable with the highest ranking in the provided category.

Examples
Input:

   const vegetables = [
      {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
      },
      {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
      },
      {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
      }
    ]

    const metric = 'redness'
    
Output:
Old Man Franklin
*/

const judgeVegetable = (vegetables, metric) => {
  let highestValue = 0;
  let winningSubmitter;

  vegetables.forEach(vegetable => {
    if (vegetable[metric] > highestValue) {
      highestValue = vegetable[metric];
      winningSubmitter = vegetable.submitter;
    }
  });
  return winningSubmitter;
};
