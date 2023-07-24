const countOccurrences = (arr, x) => {
  const n = arr.length;
  const leftIndex = findLeftMostIndex(arr, x, 0, n - 1);
  
  if (leftIndex === -1) {
    // Element x is not present in the array.
    return 0;
  }
  
  const rightIndex = findRightMostIndex(arr, x, leftIndex, n - 1);
  return rightIndex - leftIndex + 1;
}

const findLeftMostIndex = (arr, x, low, high) => {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === x && (mid === 0 || arr[mid - 1] < x)) {
      return mid;
    } else if (arr[mid] >= x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  
  return -1;
}

const findRightMostIndex = (arr, x, low, high) => {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === x && (mid === arr.length - 1 || arr[mid + 1] > x)) {
      return mid;
    } else if (arr[mid] <= x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  return -1;
}

const arr = [1, 1, 2, 2, 2, 2, 3];
const x = 2;
console.log(countOccurrences(arr, x));
