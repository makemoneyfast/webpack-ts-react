import ReactDOM from "react-dom/client";
import React from "react";
import "./style.css";

const element = document.createElement("div");
document.body.appendChild(element);

const number1 = 10;
const number2 = 20;
const number3 = 30;
const number4 = 40;
// Write a function that returns a number.

function aaa() {
  return 1;
}

// Write a function that takes a single number and returns it unchanged

function bbb(number: number) {
  return number;
}

// Write a function that takes a single number and returns that number plus ten

function ccc(number: number) {
  return number + 10;
}

// Write a function that takes two numbers and returns the sum of the two

function ddd(number1: number, number2: number) {
  return number1 + number2;
}

// Write a function that takes four numbers and returns the sum of first and last only

function eee(
  number1: number,
  number2: number,
  number3: number,
  number4: number
) {
  return number1 + number4;
}

// Write a function that takes four numbers and returns an object, where the first property
// is the sum of the first two numbers and the second property is the sum of the last two.

function fff(
  number1: number,
  number2: number,
  number3: number,
  number4: number
) {
  return {
    sumOne: number1 + number2,
    sumTwo: number3 + number4,
  };
}
// Write a function that returns a number.
const arrow1: () => number = () => 1;

// Write a function that takes a single number and returns it unchanged
const aVariableIDefined = 999; // a variable
const arrow2: (number: number) => number = () => aVariableIDefined; // takes no input, returns the variable defined above
const arrow3: (number: number) => number = (inputNumber: number) => inputNumber; // takes an input and returns it

// Write a function that takes a single number and returns that number plus ten
const arrow4: (number: number) => number = (inputNumber: number) =>
  inputNumber + 10;

// Write a function that takes two numbers and returns the sum of the two
const arrow5: (inputNumber1: number, inputNumber2: number) => number = (
  inputNumber1: number,
  inputNumber2: number
) => inputNumber1 + inputNumber2;

// Write a function that takes four numbers and returns the sum of first and last only
const arrow6: (a: number, b: number, c: number, d: number) => number = (
  inputNumber1: number,
  inputNumber2: number,
  inputNumber3: number,
  inputNumber4: number
) => inputNumber1 + inputNumber4;

// Write a function that takes four numbers and returns an object, where the first property
// is the sum of the first two numbers and the second property is the sum of the last two.
const arrow7: (
  a: number,
  b: number,
  c: number,
  d: number
) => { sumOne: number; sumTwo: number } = (
  inputNumber1: number,
  inputNumber2: number,
  inputNumber3: number,
  inputNumber4: number
) => ({
  sumOne: inputNumber1 + inputNumber4,
  sumTwo: inputNumber3 + inputNumber4,
});

const lala = () => {
  return 12;
}; // curly brackets define function body
const lolo = () => ({ aNumericValue: 12 }); // curly brackets define an object

const result = JSON.stringify(arrow7(1, 2, 3, 4));

const root = ReactDOM.createRoot(document.getRootNode() as HTMLElement);
root.render(
  <React.StrictMode>
    <div className="container">
      <h1>{result}</h1>
    </div>
  </React.StrictMode>
);
