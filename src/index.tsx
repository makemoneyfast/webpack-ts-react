import React from "react";
import { createRoot } from "react-dom/client";

import "./style.css";
import "./style.less";
import { shout } from "./shouting";

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(
  <div>
    <h1 className="hello">Hello! I am React in Typescript.</h1>
    <p>
      Native CSS variables - OK, custom properties - start with <code>--</code>{" "}
      and are accessed via <code>var()</code>. They are declared inside elements
      and can be overridden. For globally accessible variables, declare them in
      the <code>:root</code> pseudo-element.
    </p>
    <p>
      It's quite possible to do arithmetic entirely with variable values, using
      the <code>calc</code> function.
    </p>
    <h1 className="lessFirstItem">How about LESS?</h1>
    <p>
      Maybe we can do inline arithmetic with LESS. We can! The syntax is a lot
      easier to read than native CSS syntax because there are no function calls,
      variable declarations are not scoped, they just start with an{" "}
      <code>@</code>. Nice and easy.
    </p>
  </div>
);
shout();
