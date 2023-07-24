const smallestSetSize = (A) => {
  A.sort((a, b) => a[1] - b[1]);

  const n = A.length;
  let left = 0;
  let right = 0;
  let setS = new Set();
  let smallestSize = Infinity;

  while (right < n) {
    const [start, end] = A[right];
    while (left <= right && start > A[left][1]) {
      setS.delete(A[left][0]);
      setS.delete(A[left][1]);
      left++;
    }

    setS.add(start);
    setS.add(end);

    if (setS.size >= 2) {
      smallestSize = Math.min(smallestSize, setS.size);
      left++;
      setS.delete(start);
      setS.delete(end);
    }

    right++;
  }

  return smallestSize;
}

const a = [[1, 3], [1, 4], [2, 5], [3, 5]];
console.log(smallestSetSize(a)); 
