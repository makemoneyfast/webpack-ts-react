import { createRoot } from "react-dom/client";
import { reverse } from "./example";

import "./style.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

reverse(12345);

const root = createRoot(container);
root.render(
  <div>
    <h1>Hello! I am React in Typescript.</h1>
  </div>
);
