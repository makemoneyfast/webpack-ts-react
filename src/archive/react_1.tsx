import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import "./style.css";

const ticker = (callback: (count: number) => void) => {
  let count = 0;
  setInterval(() => {
    count++;
    callback(count);
  }, 2000);
};

ticker((currentCountValue: number) => console.log(currentCountValue));

const Count = (props: { currentCount: number }) => (
  <p>Count is now {props.currentCount}</p>
);
const Container = () => {
  return (
    <div className="container">
      <h1>What is count now?</h1>
      <Count currentCount={1} />
    </div>
  );
};

const domNode = document.getElementsByTagName("body");
const root = createRoot(domNode[0]);
root.render(<Container />);
