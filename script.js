let num = prompt("Enter a number");
let exponent = prompt("Enter exponent");
let numPower = 0;

function power(num, exponent = 1) {
  if ((num === null) || (exponent === null)) {
    return "Cancelled";
  } else if (( num.trim() === "") || (exponent.trim() === "")) {
    return "Empty string";
  }
  else if (isNaN(num) || isNaN(exponent)) {
    return "Not a number";
  } 
  return Math.pow(+num, +exponent);
}

numPower = power(num, exponent);
alert(numPower);


