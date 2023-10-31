/**
 * I/O: nums = [3,2,2,3], val = 3
 * O/P: nums = [2,2,_,_]
 *
 * I/O: nums = [0,1,2,2,3,0,4,2], val = 2
 * O/P: 5, nums = [0,1,3,0,4]
 */

function removeGivenElem({ nums, val }) {
  const shapedArr = [];
  if (!nums.length) {
    return [];
  }
  for (let i = 0; i < nums.length; i++) {
    const currElem = nums[i];
    if (currElem === val) {
      continue;
    }
    shapedArr.push(currElem);
  }
  return shapedArr;
}

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

const shapedArr = removeGivenElem({ nums, val });

console.log(shapedArr);
