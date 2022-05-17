const num = 10;
let fibo1 = 0;
let fibo2 = 1;
let tmp;

if (num === 0) {
  console.log(0);
} else if (num === 1) {
  console.log(1);
} else {
  for (let i = 0; i < num-2; i++) {
    tmp = fibo2;
    fibo2 = fibo1 + fibo2;
    fibo1 = tmp;
  }
  console.log(fibo2);
}

const numW = 10;
let fibo1W = 0;
let fibo2W = 1;
let tmpW;

if (numW === 0) {
  console.log(0);
} else if (numW === 1) {
  console.log(1);
} else {
  let k = 0;
  while (k < numW-2) {
    tmpW = fibo2W;
    fibo2W = fibo1W + fibo2W;
    fibo1W = tmpW;
    k++
  }
  console.log(fibo2W);
}