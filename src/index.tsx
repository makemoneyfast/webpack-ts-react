import React from "react";
import { createRoot } from "react-dom/client";

import "./style.css";
import { shout } from "./shouting";

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);
root.render(<h1 className="hello">Hello! I am React in Typescript.</h1>);
shout();
