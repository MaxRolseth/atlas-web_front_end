function divideBy(firstNumber) {
  return (secondNumber) => secondNumber / firstNumber;
}

function addBy(firstNumber) {
  return (secondNumber) => secondNumber + firstNumber;
}

var addBy100 = addBy(100);
var divideBy100 = divideBy(100);
var divideBy10 = divideBy(10);

console.log(addBy100(20));
console.log(divideBy100(200));
console.log(divideBy10(200));