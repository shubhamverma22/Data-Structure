// Brute force sol. (O(n ^ 2))

function getMaxSubArraySum({ arr, k }) {
  let globalMax = 0;
  for (let i = 0; i < arr.length; i++) {
    let currMax = 0;
    for (let j = i; j < k + i && j < arr.length; j++) {
      currMax += arr[j];
    }
    globalMax = Math.max(currMax, globalMax);
  }
  return globalMax;
}

const arr = [2, 3, 5, 2, 9, 7, 1];
const k = 3; //Size of sub-array

const maxSum = getMaxSubArraySum({ arr, k });
console.log(maxSum);
