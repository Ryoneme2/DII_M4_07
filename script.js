const persons = [
  {
    name: "A",
    age: 68,
    salary: 75900,
  },
  {
    name: "B",
    age: 35,
    salary: 55400,
  },
  {
    name: "C",
    age: 51,
    salary: 81000,
  },
  {
    name: "D",
    age: 76,
    salary: 111000,
  },
  {
    name: "E",
    age: 22,
    salary: 20500,
  },
];

let tax = 0;
const result = persons.reduce((init, cur) => {
  return init + cur.salary;
},[0,0])

const avgSalary = result.sumSalary / persons.length;

if(result > 5000000) {
  tax = ((result - 5000000) * 0.35)+1265000;
} else if (result > 2000000) {
  tax = ((result - 2000000) * 0.3)+365000;
} else if (result > 1000000) {
  tax = ((result - 1000000) * 0.25) + 115000;
} else if (result > 750000) {
  tax = ((result - 750000) * 0.2)+65000;
} else if (result > 500000) {
  tax =  ((result - 500000) * 0.15)+27500;
} else if (result > 300000) {
  tax = ((result - 300000) * 0.1)+7500;
} else if (result > 150000) {
  tax = (result - 150000) * 0.5;
} else {
  tax = 0
}

console.log({result});
console.log({avgSalary});
console.log({tax});
