import { render } from "react-dom";
import { fetchTest } from "./fetchTest";
import { HeadingWithSideEffect } from "worthless-package";

import "./style.css";

const element = document.createElement("div");
document.body.appendChild(element);

fetchTest("Japan");

render(
  <div>
    <HeadingWithSideEffect caption="whatever" />
  </div>,
  element
);
