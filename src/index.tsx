import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import "./style.css";

const element = document.createElement("div");
document.body.appendChild(element);

const Container = () => {
  // write a function that returns nothing, but sets the
  // value of the local variable 'answer1' to a specific number.

  let answer1: number;

  // write a function that returns nothing, but sets the
  // value of the local variable 'answer2' to the value of its single
  // string argument.

  let answer2: string;

  // write a function that returns nothing, but sets the
  // value of the local variable 'answer3' to the value of the
  // local variable 'sourceValue3'.

  const sourceValue3 = "source value 3";
  let answer3: string;

  // write a function that returns nothing, but increments the local
  // variable 'answer4' by 10. Update the arrow function clickHandler4
  // to execute this function.

  let answer4: string;
  const clickHandler4: () => void = () => undefined;

  // write a function that returns nothing, but increments the local
  // variable 'answer5' by 100. Update the arrow function
  // incrementClickHandler5 to execute this function.

  // write another function that returns nothing, but decrements 'answer5'
  // by 19. Update the arrow function decrementClickHandler5
  // to execute this function.

  let answer5: string;
  const incrementClickHandler5: () => void = () => undefined;
  const decrementClickHandler5: () => void = () => undefined;

  // write a function that takes a single function as an argument,
  // and returns an object with two function properties
  // called increment and decrement.

  // but increments the local
  // variable 'answer5' by 100. Update the arrow function
  // incrementClickHandler5 to execute this function.

  // write another function that returns nothing, but decrements 'answer5'
  // by 19. Update the arrow function decrementClickHandler5
  // to execute this function.

  // Call the function and set 'incrementClickHandler6' and
  // 'decrementClickHandler6' to each call one of the two functions
  // your function returns.

  // define your function here

  const [answer6, setAnswer6] = useState(10);
  const callback6 = (newValue: number) => setAnswer6(newValue);

  // call your function here

  const incrementClickHandler6: () => void = () => undefined;
  const decrementClickHandler6: () => void = () => undefined;

  return (
    <div className="container">
      <h3>Named functions</h3>
      <h4>1. Set a single local variable value</h4>
      <p>{answer1}</p>
      <h4>2. Set a single local variable value to the argument value</h4>
      <p>{answer2}</p>
      <h4>3. Set a single local variable value to another local variable</h4>
      <p>{answer3}</p>
      <h4>
        4. Increment a single local variable value, and bind this function to a
        button click event
      </h4>
      <p>
        <input type="button" onClick={clickHandler4} value="click me" />
        {answer4}
      </p>
      <h4>
        5. Write a function to increment a single local variable value, and bind
        this function to a button click event. Write another function to
        decrement the same variable, and bind that function to a different
        button click event.
      </h4>
      <p>
        <input
          type="button"
          onClick={incrementClickHandler5}
          value="increment"
        />
        &nbsp; {answer5} &nbsp;
        <input
          type="button"
          onClick={decrementClickHandler5}
          value="decrement"
        />
      </p>
      <h4>
        6. Do the same, but encapsulate everything inside a single function.
      </h4>
      <p>
        <input
          type="button"
          onClick={incrementClickHandler6}
          value="increment"
        />
        &nbsp; {answer6} &nbsp;
        <input
          type="button"
          onClick={decrementClickHandler6}
          value="decrement"
        />
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getRootNode() as HTMLElement);
root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
