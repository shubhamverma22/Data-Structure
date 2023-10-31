/**
 * Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 */

function lengthOfLastWord(str) {
  const validString = str.trim();
  let lastWordLength = 0;
  for (let i = validString.length - 1; i > 0; i -= 1) {
    const currElem = validString[i];
    if (currElem === ' ') {
      break;
    }
    lastWordLength += 1;
  }
  return lastWordLength;
}

const str = '   fly me   to   the moon  ';
const lastWordLength = lengthOfLastWord(str);
console.log(lastWordLength);

// 2nd sol
var lengthOfLastWord = function (s) {
  let result = s.trim().split(' ');
  return result[result.length - 1].length;
};
