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
    "Write a function that takes an array of numbers and returns an array of the same length where every entry is eqiuvalent to the source array value plus 6."
  );
  console.log(
    "Write a function that takes an array of numbers and returns a new array containing the same numbers with any fractional quantities removed."
  );
  console.log(
    "Write a function that takes an array of numbers and returns a new array containing only the fractional quantities of the input numbers."
  );
  console.log(
    "Write a function that takes an array of numbers and returns a new array of the same numbers in decreasing order"
  );
  console.log(
    "Write a function that takes an array of numbers and returns a new array of the same numbers in decreasing order of absolute value"
  );
  console.log(
    "Write a function that takes an array of numbers and returns a new array of the same numbers as strings"
  );
  console.log(
    "Write a function that takes an array of numbers and returns an array of boolean values (true for fractional numbers, false for integers)"
  );
  console.log(
    "Write a function that takes an array of numbers and returns the sum of all numbers in the array"
  );
  console.log(
    "Write a function that takes an array of numbers and returns the sum of all the even-numbered entries in the array"
  );
  console.log(
    "Write a function that takes an array of numbers and returns the sum of all the even-numbered entries in the array"
  );
  return (
    <div className="container">
      <h3>Arrays</h3>
    </div>
  );
};
const domNode = document.getElementsByTagName("body");
const root = createRoot(domNode[0]);
root.render(<Container />);
