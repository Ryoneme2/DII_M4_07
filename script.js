const getSalaryInfo = () => {
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

  let sum = {
    salary: 0,
    tax: 0,
  };
  for (i in persons) {
    sum.salary += (persons[i].salary) * 12;
    sum.tax += getTax(persons[i].salary * 12);
  }

  const tax = sum.tax / persons.length;
  return {
    sum : sum.salary,
    averageSalary: sum.salary / persons.length,
    tax,
  };
};

const getTax = (salary) => {
  let tax = 0;

  if (salary > 5000000) {
    tax = (salary - 5000000) * 0.35 + 1265000;
  } else if (salary > 2000000) {
    tax = (salary - 2000000) * 0.3 + 365000;
  } else if (salary > 1000000) {
    tax = (salary - 1000000) * 0.25 + 115000;
  } else if (salary > 750000) {
    tax = (salary - 750000) * 0.2 + 65000;
  } else if (salary > 500000) {
    tax = (salary - 500000) * 0.15 + 27500;
  } else if (salary > 300000) {
    tax = (salary - 300000) * 0.1 + 7500;
  } else if (salary > 150000) {
    tax = (salary - 150000) * 0.5;
  } else {
    tax = 0;
  }

  return tax
};

// console.log(
// getSalaryInfo()
// );
console.log(`Sum Salary : ${getSalaryInfo().sum}`);
console.log(`Average Salary : ${getSalaryInfo().averageSalary}`);
console.log(`Tax Average : ${getSalaryInfo().tax}`);
