/*
Given a question topic, complete a function interviewAnswer(topic) that returns your stance on that particular election issue. The answer should be returned as a string.

When asked about arts funding, the function should return "We'll have to get creative!"
When asked about the economy, the function should return "Time is money."
When asked about transportation, the function should return "It's going to be a long road, so we better get moving."
If you're asked about a topic that isn't in the list above, respond with a default statement. (For example, "QUACK!")

Examples
Input:
const topic = 'economy'
Output:
Time is money.
Input:
const topic = 'transportation'
Output:
It's going to be a long road, so we better get moving.
*/

const interviewAnswer = topic => {
  const topicArr = ["arts funding", "economy", "transportation"];
  const responseArr = [
    "We'll have to get creative!",
    "Time is money.",
    "It's going to be a long road, so we better get moving."
  ];
  const index = topicArr.indexOf(topic);
  if (index >= 0) {
    return responseArr[index];
  } else {
    return "QUACK";
  }
};
