/*
Instructions
We need to go through the survey responses to see what your constituents would like you to focus on over the course of your term in office. The array that you are given contains many phrases and words pulled from a number of interviews. We only want to focus on the following three key phrases: "smart city", "arts funding", and "transportation".

Our termTopics function needs to count how many times each of those topics was mentioned in the surveys, and then return an array with the number of mentions in the following order: smart city, arts funding, and then transportation.

Examples
Input:

    const interviews = [
      'smart city', 
      'rebuild the lighthouse', 
      'arts funding', 
      'transportation',
      'arts funding', 
      'rebuild the lighthouse', 
      'sports funding', 
      'tax cuts', 
      'smart city',
      'arts funding', 
      'smart city'
    ]
    
Output:

    [
      3, // smart city
      3, // arts funding
      1  // transportation
    ]
    */

const termTopics = interviews => {
  const relevantTerms = ["smart city", "arts funding", "transportation"];
  let smartCount = 0;
  let artsCount = 0;
  let transCount = 0;
  let index;
  for (topic of interviews) {
    if (relevantTerms.includes(topic)) {
      index = relevantTerms.indexOf(topic);
      index === 0
        ? (smartCount += 1)
        : index === 1
        ? (artsCount += 1)
        : (transCount += 1);
    }
  }
  return [smartCount, artsCount, transCount];
};

termTopics([
  "smart city",
  "rebuild the lighthouse",
  "arts funding",
  "transportation",
  "arts funding",
  "rebuild the lighthouse",
  "sports funding",
  "tax cuts",
  "smart city",
  "arts funding",
  "smart city"
]);
