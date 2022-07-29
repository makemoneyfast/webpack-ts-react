import { render } from "react-dom";

import "./style.css";
import { shout } from "./shouting";

const element = document.createElement("div");
document.body.appendChild(element);

render(<h1>Hello! I am React in Typescript.</h1>, element);
shout();
