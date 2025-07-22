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
        zigzag pattern on a given number of rows &emdash; three rows in this
        case &emdash; like this: (you may want to display this pattern in a
        fixed font for better legibility)
      </p>

      <pre>
        {`P   A   H   N
A P L S I I G
Y   I   R`}
      </pre>

      <p>
        And then read line by line, omitting whitespace:{" "}
        <code>&quot;PAHNAPLSIIGYIR&quot;</code>
      </p>

      <p>
        Write the code that will take a string and make this conversion given a
        number of rows:
      </p>

      <pre>string zigzag(string s, int numRows);</pre>

      <h2>Example 1:</h2>
      <p>
        <strong>Input:</strong> s = &quot;PAYPALISHIRING&quot;, numRows = 3
      </p>
      <p>
        <strong>Output:</strong> &quot;PAHNAPLSIIGYIR&quot;<br></br>
        <pre>
          {`P   A   H   N
A P L S I I G
Y   I   R`}
        </pre>
      </p>
      <h2>Example 2:</h2>
      <p>
        <strong>Input:</strong> s = &quot;PAYPALISHIRING&quot;, numRows = 4
      </p>
      <p>
        <strong>Output:</strong> &quot;PINALSIGYAHRPI&quot;<br></br>
        <pre>
          {`P     I    N
A   L S  I G
Y A   H R
P     I`}
        </pre>
      </p>
      <h2>Example 3:</h2>
      <p>
        <strong>Input:</strong> s = &quot;A&quot;, numRows = 1
      </p>
      <p>
        <strong>Output:</strong> &quot;A&quot;<br></br>
        <pre>{`A`}</pre>
      </p>

      <h1>Solution output</h1>
      <pre>
        <strong>Input:</strong> s = &quot;PAYPALISHIRING&quot;, numRows = 3
        <br></br>
        <strong>Output:</strong> &quot;
        {`${zigzag("PAYPALISHIRING", 3)}`}
        &quot;
        <br></br>
        <strong>Input:</strong> s = &quot;PAYPALISHIRING&quot;, numRows = 4
        <br></br>
        <strong>Output:</strong> &quot;
        {`${zigzag("PAYPALISHIRING", 4)}`}
        &quot;
        <br></br>
        <strong>Input:</strong> s = &quot;A&quot;, numRows = 1<br></br>
        <strong>Output:</strong> &quot;
        {`${zigzag("A", 1)}`}
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
