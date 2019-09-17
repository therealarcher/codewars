// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears
// only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if
// character is a duplicate.

/* 
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

function duplicateEncode(word) {
  let newArr = "";
  word_lower = word.toLowerCase();
  for (let letter of word_lower) {
    // console.log(letter)}
    if (word_lower.indexOf(letter) === word_lower.lastIndexOf(letter)) {
      newArr += "(";
    } else {
      newArr += ")";
    }
  }
  console.log(newArr);
  return newArr;
}
