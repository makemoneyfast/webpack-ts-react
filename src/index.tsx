import { render } from "react-dom";
import { Rofl } from "./example";

import "./style.css";

const element = document.createElement("div");
document.body.appendChild(element);

render(
  <div>
    <h1>Hello! I am React in Typescript.</h1>
    <Rofl count={10} />
  </div>,
  element
);
