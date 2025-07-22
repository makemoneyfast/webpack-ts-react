import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./style.css";
import { zigzag } from "./example";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Root element not found");
}

const App = () => (
  <div>
    <h1>Problem</h1>
    <div data-track-load="description_content">
      <p>
        The string <code>&quot;PAYPALISHIRING&quot;</code> is written in a
        zigzag pattern on a given number of rows like this: (you may want to
        display this pattern in a fixed font for better legibility)
      </p>

      <pre>
        {`P   A   H   N
A P L S I I G
Y   I   R`}
      </pre>

      <p>
        And then read line by line: <code>&quot;PAHNAPLSIIGYIR&quot;</code>
      </p>

      <p>
        Write the code that will take a string and make this conversion given a
        number of rows:
      </p>

      <pre>string convert(string s, int numRows);</pre>

      <p>&nbsp;</p>
      <p>
        <strong>Example 1:</strong>
      </p>

      <pre>
        <strong>Input:</strong> s = &quot;PAYPALISHIRING&quot;, numRows = 3
        <br></br>
        <strong>Output:</strong> &quot;
        {zigzag("PAYPALISHIRING", 3)}
        &quot;
      </pre>
    </div>{" "}
  </div>
);

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
