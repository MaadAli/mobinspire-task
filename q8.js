const countSubarray = (arr, k) => {
  let count = 0;
  let n = arr.length;

  for (i = 0; i < n; i++) {
    let sum = 0;
    for (j = i; j < n; j++) {
      if (sum + arr[j] < k) {
        sum = arr[j] + sum;
        count++;
      } else {
        break;
      }
    }
  }
  return count;
}

const a = [2, 5, 6, 7];
const k = 10;
console.log(countSubarray(a, k));
