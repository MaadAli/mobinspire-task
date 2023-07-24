const binaryToBase6 = (str) => {
  let val = 0;
  const base = 6;
  const num = str.split('').reverse();

  for (let i = 0; i < num.length; i++) {
    if (num[i] === '1') {
      val += Math.pow(2, i);
    }
  }

  let res = '';

  while (val > 0) {
    const remainder = val % base;
    res = remainder + res;
    val = Math.floor(val / base);
  }

  return res || '0';
}

const str = '101010111';
console.log(binaryToBase6(str));
