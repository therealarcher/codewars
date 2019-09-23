/* 
The new "Avengers" movie has just been released! There are a lot of people at the cinema box 
office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" 
ticket costs 25 dollars. Vasya is currently working as a clerk. He wants to sell a ticket to every 
single person in this line.
Can Vasya sell a ticket to every person and give change if he initially has no money and sells the
tickets strictly in the order people queue?
Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand 
at that moment. Otherwise return NO.

tickets([25, 25, 50]) // => YES 
tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
*/

function tickets(peopleInLine) {
  let twenty_five = 0;
  let fifty = 0;
  let hundred = 0;

  for (let incoming of peopleInLine) {
    if (incoming === 25) {
      twenty_five += 1;
    } else if (incoming === 50 && twenty_five === 0) {
      return "NO";
    } else if (incoming === 50) {
      twenty_five -= 1;
      fifty += 1;
    } else {
      if (fifty > 0 && twenty_five > 0) {
        hundred += 1;
        fifty -= 1;
        twenty_five -= 1;
      } else if (twenty_five >= 3) {
        hundred += 1;
        twenty_five -= 3;
      } else {
        return "NO";
      }
    }
  }
  return "YES";
}
