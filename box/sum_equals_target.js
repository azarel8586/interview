// Given array find all the sets of two numbers that add up to a target number
function findAllSums(nums, target) {
  let complementaryPairs = [];
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];
    if (nums.indexOf(comp) !== -1 && nums.indexOf(comp) > i) {
      complementaryPairs.push([nums[i], nums[nums.indexOf(comp)]]);
    }
  }
  return complementaryPairs;
}

const input = [1,2,3,-4,7, -1, 4, 0];
console.log(findAllSums(input, 3));
