function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

function subtract(a, b) {
  return a - b;
}

console.log(subtract(3, 1));

function calculateMortgagePayment(loanAmt, monthlyPayment) {
  return ` A loan amounnt of ${loanAmt} has a monthly payment of ${monthlyPayment}`;
}

console.log(calculateMortgagePayment(500000, 3200));

function calculateLTV(loanAmount, homeValue) {
  return (loanAmount / homeValue) * 100;
}

console.log(calculateLTV(400000, 500000));

function calculateCLTV(firstMortgage, secondMortgage, homeValue) {
  // return CLTV percentage
  return `${(firstMortgage + secondMortgage) / homeValue * 100}% `;
}

console.log(calculateCLTV(300000, 50000, 500000));
