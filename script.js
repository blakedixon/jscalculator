var clickVal = "";
var calculation = document.querySelector("h5");
var savedNumber = 0;
var tempCalculation = 0;
var state = "";
console.log(calculation);
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const times = document.querySelector(".times");
const add = document.querySelector(".add");
const clear = document.querySelector(".clear");
const allClear = document.querySelector(".allClear");
const sign = document.querySelector(".sign");
const decimal = document.querySelector(".decimal");
const divide = document.querySelector(".division");
const sub = document.querySelector(".subtraction");
const equals = document.querySelector(".equals");
this.updateCalc = this.updateCalc.bind(this);
this.addition = this.addition.bind(this);
this.subtraction = this.subtraction.bind(this);
this.multiplication = this.multiplication.bind(this);
this.division = this.division.bind(this);
this.clearCalc = this.clearCalc.bind(this);
this.aClear = this.aClear.bind(this);
this.equalsOperation = this.equalsOperation.bind(this);
function updateCalc() {
  console.log(clickVal);
  if (calculation.textContent.length >= 18) return;
  if (calculation.textContent == "0")
    calculation.textContent = clickVal;
  else if (calculation.textContent.length >= 14) {
    const style = window.getComputedStyle(calculation, null).getPropertyValue('font-size');
    const fontSize = parseFloat(style);
    calculation.style.fontSize = (fontSize - 2) + 'px';
    calculation.textContent += clickVal;
  } else {
    calculation.textContent += clickVal;
  }
}
function clearCalc() {
  calculation.textContent = "0";
  calculation.style.fontSize = "24px";
}
function aClear() {
  clearCalc();
  state = "";
  savedNumber = 0;
  tempCalculation = 0;
  add.style.backgroundColor = "orange";
  add.style.color = "white";
  sub.style.backgroundColor = "orange"
  sub.style.color = "white";
  divide.style.backgroundColor = "orange"
  divide.style.color = "white";
  times.style.backgroundColor = "orange";
  times.style.color = "white";
}
function equalsOperation() {
  console.log("Equals Called");
  tempCalculation = savedNumber;
  switch (state) {
    case "add":
      add.style.backgroundColor = "orange";
      add.style.color = "white";
      savedNumber = parseFloat(calculation.textContent);
      calculation.textContent = savedNumber + tempCalculation;
      break;
    case "subtraction":
      sub.style.backgroundColor = "orange"
      sub.style.color = "white";
      calculation.textContent = savedNumber - parseFloat(calculation.textContent);
      break;
    case "division":
      divide.style.backgroundColor = "orange"
      divide.style.color = "white";
      calculation.textContent = savedNumber / parseFloat(calculation.textContent);
      break;
    case "times":
      times.style.backgroundColor = "orange";
      times.style.color = "white";
      calculation.textContent = parseFloat(calculation.textContent) * savedNumber;
      break;
     default:
       state = "";
       break;
  }
  // let solve
}
function addition() {
  console.log("Addition Called");
  add.style.backgroundColor = "black";
  add.style.color = "orange";
  if (savedNumber == 0) {
    savedNumber = parseFloat(calculation.textContent);
  } else {

  }
  tempCalculation = savedNumber;
  clearCalc();
  state = "add";
}
function subtraction() {
  console.log("Subtraction Called");
  sub.style.backgroundColor = "black";
  sub.style.color = "orange";
  savedNumber = parseFloat(calculation.textContent);
  clearCalc();
  state = "subtraction";
}
function division() {
  console.log("division Called");
  divide.style.backgroundColor = "black";
  divide.style.color = "orange";
  savedNumber = parseFloat(calculation.textContent);
  clearCalc();
  state = "division";
}
function multiplication() {
  console.log("Times Called");
  times.style.backgroundColor = "black";
  times.style.color = "orange";
  savedNumber = parseFloat(calculation.textContent);
  clearCalc();
  state = "times";
}
zero.addEventListener('click', function () { clickVal = "0" });
zero.addEventListener('click', this.updateCalc);
one.addEventListener('click', function () { clickVal = "1" });
one.addEventListener('click', this.updateCalc);
two.addEventListener('click', function () { clickVal = "2" });
two.addEventListener('click', this.updateCalc);
three.addEventListener('click', function () { clickVal = "3" });
three.addEventListener('click', this.updateCalc);
four.addEventListener('click', function () { clickVal = "4" });
four.addEventListener('click', this.updateCalc);
five.addEventListener('click', function () { clickVal = "5" });
five.addEventListener('click', this.updateCalc);
six.addEventListener('click', function () { clickVal = "6" });
six.addEventListener('click', this.updateCalc);
seven.addEventListener('click', function () { clickVal = "7" });
seven.addEventListener('click', this.updateCalc);
eight.addEventListener('click', function () { clickVal = "8" });
eight.addEventListener('click', this.updateCalc);
nine.addEventListener('click', function () { clickVal = "9" });
nine.addEventListener('click', this.updateCalc);
clear.addEventListener('click', this.clearCalc);
allClear.addEventListener('click', this.aClear);
equals.addEventListener('click', this.equalsOperation);
add.addEventListener('click', this.addition);
sub.addEventListener('click', this.subtraction);
times.addEventListener('click', this.multiplication);
divide.addEventListener('click', this.divison);
//decimal
//sign
