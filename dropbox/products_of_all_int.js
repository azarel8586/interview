const input = [3, 1, 2, 5, 6, 4];

function getProductsOfAllIntsExceptAtIndex(inputArr) {
  const resArr = [];
  let prodSoFar = 1
  for (let i = 0; i < inputArr.length; i++){
      resArr.push(prodSoFar);
      prodSoFar = prodSoFar * inputArr[i];
  }
  prodSoFar = 1;
  for (let j = (inputArr.length-1); j >= 0; j--){
      resArr[j] = resArr[j] * prodSoFar;
      prodSoFar = prodSoFar * inputArr[j];
  }
  return resArr;
}


console.log(getProductsOfAllIntsExceptAtIndex(input));
console.log(getProductsOfAllIntsExceptAtIndex([2,4,10]));
