const maxSubarraySum = (arr) => {
  let maxEndingHere = 0;
  let maxSoFar = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Sample input and output
const arr = [5, -2, 4, -2, 1];
console.log(maxSubarraySum(arr));
