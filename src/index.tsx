import { createRoot } from "react-dom/client";
import "./style.css";

const Container = () => {
  return (
    <div className="container">
      <h3>Asynchronous functions</h3>
      <p>Open dev tools.</p>
    </div>
  );
};
const domNode = document.getElementsByTagName("body");
const root = createRoot(domNode[0]);
root.render(<Container />);

const getARandomNumberSynchronously = () => {
  const randomNumber = Math.random();

  return randomNumber;
};

const getARandomNumberAsynchronously = () => {
  let randomNumber: number;

  setTimeout(() => (randomNumber = Math.random()), 1000);

  return randomNumber;
};

console.log("Synchronously", getARandomNumberSynchronously());
console.log("Asynchronously", getARandomNumberAsynchronously());
