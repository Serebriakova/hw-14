let num = prompt("Enter a number");
let exponent = prompt("Enter exponent");
let numPower = 0;

function power(num, exponent = 1) {
  if (isNaN(num) || isNaN(exponent)) {
    return "some eror";
  } else {
    num = Number(num);
    exponent = Number(exponent);
    return (numPower = Math.pow(num, exponent));
  }
}

if (exponent == 0) {
  exponent = undefined;
}

numPower = power(num, exponent);
alert(numPower);
