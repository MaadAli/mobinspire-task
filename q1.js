const longestSubstring = (s, k) => {
  const n = s.length;
  let maxLength = 0;
  const count = {};
  let l = 0;

  for (let r = 0; r < n; r++) {
    count[s[r]] = (count[s[r]] || 0) + 1;

    while ((r - l + 1) - Math.max(...Object.values(count)) > k) {
      count[s[l]]--;
      l++;
    }

    maxLength = Math.max(maxLength, r - l + 1);
  }

  return maxLength;
}
const s = "AABABBA";
const k = 2;
console.log(longestSubstring(s, k));
