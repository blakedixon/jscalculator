var clickVal = "";
var calculation = document.querySelector("h5");
var secondCalculation = 0;
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
const sign = document.querySelector(".sign");
const decimal = document.querySelector(".decimal");
const divison = document.querySelector(".divison");
const subtraction = document.querySelector(".subtraction");
const equals = document.querySelector(".equals");


this.updateCalc = this.updateCalc.bind(this);
this.addition = this.addition.bind(this);
this.clearCalc = this.clearCalc.bind(this);
this.equalsOperation = this.equalsOperation.bind(this);

function updateCalc() {
  console.log(clickVal);
  if (calculation.textContent.length >= 18) return;
  if (calculation.textContent == "0")
    calculation.textContent = clickVal;
  else if (calculation.textContent.length >= 14) {
    const style = window.getComputedStyle(calculation, null).getPropertyValue('font-size');
    const fontSize = parseFloat(style);
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
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
function equalsOperation() {
  console.log("Equals Called");
  switch (state) {
    case "add":
      calculation.textContent = parseFloat(calculation.textContent) + secondCalculation;
  }

  // let solve
}

function addition() {
  console.log("Addition Called");
  add.style.backgroundColor = "black";
  add.style.color = "orange";
  secondCalculation = parseFloat(calculation.textContent);
  clearCalc();
  state = "add";
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
equals.addEventListener('click', this.equalsOperation);
add.addEventListener('click', this.addition);
