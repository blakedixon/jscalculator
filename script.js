var clickVal = "";
var calculation = document.querySelector("h5");
console.log(calculation);

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const second = document.querySelector(".second");
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


this.updateCalc = this.updateCalc.bind(this);
this.addition = this.addition.bind(this);

function updateCalc() {
  console.log(clickVal);
  if (calculation.textContent == "0")
    calculation.textContent = clickVal;
  else
    calculation.textContent += clickVal;
}

function addition() {
  console.log("Addition Called");
  add.style.backgroundColor = "black";
  add.style.color = "orange";
}

zero.addEventListener('click', function () { clickVal = "0" });
zero.addEventListener('click', this.updateCalc);
one.addEventListener('click', function () { clickVal = "1" });
one.addEventListener('click', this.updateCalc);
second.addEventListener('click', function () { clickVal = "2" });
second.addEventListener('click', this.updateCalc);
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

clear.addEventListener('click', function () { calculation.textContent = "0" });
add.addEventListener('click', this.addition);
