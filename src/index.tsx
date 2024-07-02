import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import "./style.css";

const Container = () => {
  const sourceArray1 = [1, -1, -19, 9, 6.2, 15.75, 3, 99.999];

  console.log("Arrays");
  console.log("* - ".repeat(10));
  console.log("source array 1: ", sourceArray1);
  console.log("* - ".repeat(10));

  console.log(
    "Write a function that takes an array of numbers and returns an array of the same length where every entry is eqiuvalent to the source array value plus 6.",
    one()
  );

  function one() {
    return sourceArray1.map((x) => x + 6);
  }

  console.log(
    "Write a function that takes an array of numbers and returns a new array containing the same numbers with any fractional quantities removed.",
    two()
  );

  function two() {
    return sourceArray1.map((x) => Math.floor(x));
  }

  console.log(
    "Write a function that takes an array of numbers and returns a new array containing only the fractional quantities of the input numbers.",
    three()
  );

  function three() {
    return sourceArray1.map((x) => x % 1);
  }

  console.log(
    "Write a function that takes an array of numbers and returns a new array of the same numbers in decreasing order",
    four()
  );

  function four() {
    return [...sourceArray1].sort((a: number, b: number) => b - a);
  }

  console.log(
    "Write a function that takes an array of numbers and returns a new array of the same numbers in decreasing order of absolute value",
    five()
  );

  function five() {
    return [...sourceArray1].sort(
      (a: number, b: number) => Math.abs(b) - Math.abs(a)
    );
  }

  console.log(
    "Write a function that takes an array of numbers and returns a new array of the same numbers as strings",
    six()
  );

  function six() {
    return sourceArray1.map((x) => x.toString());
  }

  console.log(
    "Write a function that takes an array of numbers and returns an array of boolean values (true for fractional numbers, false for integers",
    seven()
  );

  function seven() {
    return sourceArray1.map((x) => x % 1 !== 0);
  }

  console.log(
    "Write a function that takes an array of numbers and returns the sum of all numbers in the array",
    eight()
  );

  function eight() {
    return sourceArray1.reduce((accumulator, x) => accumulator + x, 0);
  }

  console.log(
    "Write a function that takes an array of numbers and returns the sum of all the even-numbered entries in the array",
    nine()
  );

  function nine() {
    return sourceArray1.reduce(
      (accumulator, x, i) => (i % 2 !== 0 ? accumulator + x : accumulator),
      0
    );
  }
  console.log(
    "Write a function that takes a string and returns the same string but with every instance of the word 'the' removed"
  );

  const testString = "the hello to the world"
  function ten(str: string) {
    const stepOne = str.split(" ");
    const stepTwo = stepOne.filter((word) => word !== 'the')
    return stepTwo.join(" ")
  }

  console.log("question ten:", ten(testString));

  console.log(
    "Write a function that takes a string and returns a string with the same text except that the words are in reverse order:", eleven(testString)
  );

  function eleven(str: string) {
    const stepOne = str.split(" ");
    const stepTwo = stepOne.reverse();
    return stepTwo.join(" ") // procedural
  }

  function elevenA(str: string) {
    return str.split(" ").reverse().join(" ")
  }

console.log("question 11a:", elevenA(testString));

  console.log(
    "Write a function that takes a string and returns a string with the same text except that the letters in each word are in reverse order:", twelve(testString)
  );

  function twelve(str: string) {
    return str.split(" ").map(x => x.split("").reverse().join("")).join(" "); //declarative
  }

  return (
    <div className="container">
      <h3>Arrays</h3>
    </div>
  );
};
const domNode = document.getElementsByTagName("body");
const root = createRoot(domNode[0]);
root.render(<Container />);
