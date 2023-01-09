import React from "react";
import { createRoot } from "react-dom/client";

import "./style.css";
import { shout } from "./shouting";
import { App } from "./App";
import { NumberBasedApp } from "./NumberBasedApp";

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(
  <div>
    <App />
    <NumberBasedApp />
    <hr />
    Numeric mode <input type="text" inputMode="numeric" />
  </div>
);
shout();
