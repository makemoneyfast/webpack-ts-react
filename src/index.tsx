import { createRoot } from "react-dom/client";
import { Rofl, longestPalindrome } from "./example";

import "./style.css";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const root = createRoot(container);
root.render(
  <div>
    <h1>Hello! I am React in Typescript.</h1>
    {
      longestPalindrome("babad") // Example usage of longestPalindrome function
    }
  </div>
);
