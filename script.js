// check prime number
const number = 19
let count = 0
for(let i = 2; i < number; i++) {
  if(number % i === 0) {
    count++
    break
  }
}
if(count === 0) {
  console.log(number + ' is prime number')
} else {
  console.log(number + ' is not prime number')
}