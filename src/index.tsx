import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Rofl } from "./example";

import "./style.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const App = () => (
  <div>
    <h1>Hello! I am React in Typescript.</h1>
    <Rofl count={10} />
  </div>
);

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
