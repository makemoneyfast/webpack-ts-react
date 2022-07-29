import * as _ from "lodash";

import { render } from "react-dom";

import "./style.css";
import { shout } from "./shouting";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack", "with typescript"], " ");
  element.classList.add("hello");
  shout();

  return element;
}

const element = document.createElement("div");
document.body.appendChild(element);

render(<h1>Hello! I am React in Typescript.</h1>, element);
