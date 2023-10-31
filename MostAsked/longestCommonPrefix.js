/**
 * const strArr = ["flower","flow","flight"]
 * Output: "fl"
 *
 * const arr2 = ["dog","racecar","car"]
 * Output: ""
 */

function longestCommonPrefix(strArr) {
  let output = '';
  if (!strArr.length) {
    return output;
  }
  for (let i = 0; i < strArr[0].length; i++) {
    if (strArr.every((str) => str[i] === strArr[0][i])) {
      output += strArr[0][i];
    } else {
      break;
    }
  }
  return output;
}

const strArr = ['flower', 'flow', 'flight'];

const output = longestCommonPrefix(strArr);
console.log(output);
