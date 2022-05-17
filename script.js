// factorial for loop
let num = 3
let factorialFor = 1
let factorialWhile = 1
for (let i = 1; i <= num; i++) {
  factorialFor *= i
}
console.log({factorialFor})

// while
let numW = 4
while (numW > 0) {
  factorialWhile *= numW
  numW--
}
console.log({factorialWhile})