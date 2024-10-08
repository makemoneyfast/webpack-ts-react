import { createRoot } from "react-dom/client";
import "./style.css";
import { useState } from "react";

const OminousCountdown = () => {
  const [message, setMessage] = useState("all is well");
  const [timeoutKey, setTimeoutKey] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  return (
    <div>
      <h2>{message}</h2>
      <input
        type="button"
        onClick={() => {
          setMessage("the clock is ticking");
          const timeout = setTimeout(() => {
            setTimeoutKey(undefined);
            setMessage("disaster has overtaken us, all is lost");
          }, 5000);
          setTimeoutKey(timeout);
        }}
        value="precipitate crisis"
      />
      <input
        type="button"
        onClick={() => {
          if (timeoutKey !== undefined) {
            clearTimeout(timeoutKey);
            setTimeoutKey(undefined);
            setMessage("all is well");
          }
        }}
        value="avert crisis"
      />
    </div>
  );
};

const Container = () => {
  return (
    <div className="container">
      <h3>Asynchronous functions</h3>
      <OminousCountdown />
    </div>
  );
};
const domNode = document.getElementsByTagName("body");
const root = createRoot(domNode[0]);
root.render(<Container />);

const getARandomNumberSynchronously = () => {
  console.log("#1 generating random number now");
  const randomNumber = Math.random();

  return randomNumber;
};

const getARandomNumberAsynchronously = () => {
  let randomNumber: number;

  setTimeout(() => {
    console.log("#2 generating random number now");
    randomNumber = Math.random();
  }, 1000);

  return randomNumber;
};

// Get a number from the synchronous function and print it
console.log("Synchronously", getARandomNumberSynchronously());

// Get a number from the asynchronous function and print it
console.log("Asynchronously", getARandomNumberAsynchronously());
