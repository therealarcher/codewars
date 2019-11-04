/*
Instructions
Complete the function registerToVote(name, unregisteredVoters) that takes in the name of a newly registered voter and an array of names of those who have not yet registered to vote. Your function must return an array, with the newly registered voter's name removed.

Examples
Input:

    const name = 'Bradley';
    const unregisteredVoters = ['Jake', 'Alanna', 'Bradley', 'Stephanie'];
    
Output:
['Jake', 'Alanna', 'Stephanie']
*/

const registerToVote = (name, unregisteredVoters) => {
  const indexOfVoter = unregisteredVoters.indexOf(name);
  unregisteredVoters.splice(indexOfVoter, 1);
  return unregisteredVoters;
};
