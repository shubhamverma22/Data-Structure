// [2,7,4,9, 13, 8], target = 12

// Using HashMap (Optimised Approach) O(n)

const twoSum = (nums, target) => {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    hashTable[nums[i]] = i;
  }
  for (let j = 0; j < nums.length; j++) {
    let complement = target - nums[j];
    if (hashTable.hasOwnProperty(complement) && hashTable[complement] !== j) {
      return [hashTable[complement], j];
    }
  }
  return null;
};
const nums = [2, 7, 4, 9, 13, 8];
const target = 12;
const numIndexes = twoSum(nums, target);

console.log(numIndexes);
