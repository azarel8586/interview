/**
  Given an array of integers eg [1,2,-3,1] find whether there is a sub-
  sequence that sums to 0 and return it (eg 1,2,-3 or 2,-3,1) Checking every 
  sub-sequence is O(n^2) which is too inefficient
**/
function zeroSumSequence(arrInt) {
  let sumsArr = [];
  let runningSum = 0;
  for (let idx in arrInt) {
    runningSum += arrInt[idx];
    if (runningSum === 0) {
      let end = Number.parseInt(idx, 10) + 1;
      return arrInt.slice(0, end);
    }
    
    let previouslySeen = sumsArr.indexOf(runningSum);
    if (previouslySeen !== -1) {
      let start = previouslySeen+1;
      let end = Number.parseInt(idx, 10) + 1;
      return arrInt.slice(start, end);
    } else {
      sumsArr.push(runningSum);
    }
  }
  return [];
}

console.log(zeroSumSequence([1,2,-3,1]));
console.log(zeroSumSequence([1,2,1,-3,-4]));
console.log(zeroSumSequence([100, 7, 1, 2, -3]));
