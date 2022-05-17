const number = 57
let count;

for(let i = 2; i < number; i++) {
  count = 0
  for(let j = 2; j <= i; j++) {
    if(i % j === 0) {
      count++
    }
  }
  if(count == 1) {
    console.log(i, 'is a prime number')
  }
}
