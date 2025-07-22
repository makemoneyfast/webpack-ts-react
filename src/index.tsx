import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { exercise } from "./example";

import "./style.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

console.log(
  `%c   Exercise output follows   `,
  "background-color: #FC0; color: #333; font-weight: bold"
);
console.log(exercise());

const App = () => {
  return (
    <div>
      <h1>Exercise output.</h1>
      <pre>{`${exercise()}`}</pre>
    </div>
  );
};

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
