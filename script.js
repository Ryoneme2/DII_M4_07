// fibonacci
const num = 11;
let fibo1 = 0;
let fibo2 = 1;
let tmp;

if (num === 0) {
  console.log(0);
} else if (num === 1) {
  console.log(1);
} else {
  for (let i = 0; i < num-1; i++) {
    tmp = fibo2;
    fibo2 = fibo1 + fibo2;
    fibo1 = tmp;
  }
  console.log(fibo2);
}
