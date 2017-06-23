

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

function updateCalc() {
  calculation.textContent = clickVal;
}

zero.addEventListener('click', function () { clickVal = "0" })
zero.addEventListener('click', this.updateCalc);
one.addEventListener('click', function () { clickVal = "1" })
one.addEventListener('click', this.updateCalc);
second.addEventListener('click', function () { clickVal = "2" })
second.addEventListener('click', this.updateCalc);
three.addEventListener('click', function () { clickVal = "3" })
three.addEventListener('click', this.updateCalc);
four.addEventListener('click', function () { clickVal = "4" })
four.addEventListener('click', this.updateCalc);
five.addEventListener('click', function () { clickVal = "5" })
five.addEventListener('click', this.updateCalc);
