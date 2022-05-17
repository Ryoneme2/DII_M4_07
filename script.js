let netIncome = 999999;
let tax;

if(netIncome > 5000000) {
  tax = ((netIncome - 5000000) * 0.35)+1265000;
} else if (netIncome > 2000000) {
  tax = ((netIncome - 2000000) * 0.3)+365000;
} else if (netIncome > 1000000) {
  tax = ((netIncome - 1000000) * 0.25) + 115000;
} else if (netIncome > 750000) {
  tax = ((netIncome - 750000) * 0.2)+65000;
} else if (netIncome > 500000) {
  tax =  ((netIncome - 500000) * 0.15)+27500;
} else if (netIncome > 300000) {
  tax = ((netIncome - 300000) * 0.1)+7500;
} else if (netIncome > 150000) {
  tax = (netIncome - 150000) * 0.5;
} else {
  tax = 0
}

console.log(`You have to pay ${Math.floor(tax)}`);