import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import "./style.css";

// const element = document.createElement("div");
// document.body.appendChild(element);

const Container = () => {
  // write a function that returns nothing, but sets the
  // value of the local variable 'answer1' to a specific number.

  let answer1: number;

  function one() {
    answer1 = 1
  };
  one();
  console.log('this is answer1', answer1);

  // write a function that returns nothing, but sets the
  // value of the local variable 'answer2' to the value of its single
  // string argument.

  let answer2: string;

  function two(answer: string) {
    answer2 = answer
  };
  two('hello');
  console.log('this is answer2', answer2);

  // write a function that returns nothing, but sets the
  // value of the local variable 'answer3' to the value of the
  // local variable 'sourceValue3'.

  const sourceValue3 = "source value 3";
  let answer3: string;

  function three() {
    answer3 = sourceValue3
  };
  three();
  console.log('this is answer3', answer3);

  // write a function that returns nothing, but increments the local
  // variable 'answer4' by 10. Update the arrow function clickHandler4
  // to execute this function.

  let answer4 = 10;
  function four() {
    answer4 = answer4 + 10;
  };
  const clickHandler4: () => void = () => 
    four();

  console.log('this is answer4', answer4);

  // write a function that returns nothing, but increments the local
  // variable 'answer5' by 100. Update the arrow function
  // incrementClickHandler5 to execute this function.

  // write another function that returns nothing, but decrements 'answer5'
  // by 19. Update the arrow function decrementClickHandler5
  // to execute this function.

  let answer5 = 50;
  function five() {
    answer5 = answer5 + 10;
  };
  const incrementClickHandler5: () => void = () => 
    five();
  
  function six() {
    answer5 = answer5 - 19;
  }; 
  const decrementClickHandler5: () => void = () => 
    six();

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

  function seven(lala: (newValue: number) => void) {
    let internal = 10;
    return{
      increment: () => {
        internal = internal + 1;
        lala(internal);
      },
      decrement: () => {
        internal = internal - 1;
        lala(internal);
      }
    }
  };

  const [answer6, setAnswer6] = useState(10);
  const callback6 = (newValue: number) => setAnswer6(newValue);

  // call your function here
  const lolo = seven(callback6);
  const incrementClickHandler6: () => void = () => 
    lolo.increment();
  const decrementClickHandler6: () => void = () =>
    lolo.decrement();

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
