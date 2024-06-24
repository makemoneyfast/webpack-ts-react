import { createRoot } from "react-dom/client";
import React, { useState } from "react";
import "./style.css";

const Container = () => {
  // 1.
  const [input1, setInput1] = useState(0);
  const [answer1, setAnswer1] = useState(0);

  // Define a function called 'one' that it returns the number it receives as an argument or
  // the number 49, whichever is larger.

  const click1 = () => setAnswer1(one(input1));

  // 2.
  const [input2, setInput2] = useState(0);
  const [answer2, setAnswer2] = useState(0);

  // Define a function called 'two' that returns the number it receives as an argument or the
  // number 512, whichever is smaller.

  const click2 = () => setAnswer2(two(input2));

  // 3.
  const [input3a, setInput3a] = useState(0);
  const [input3b, setInput3b] = useState(0);
  const [answer3, setAnswer3] = useState(0);

  // Define a function called 'three' that it returns the largest of the two numbers it receives as
  // arguments.

  const click3 = () => setAnswer3(three(input3a, input3b));

  // 4.
  const [input4a, setInput4a] = useState(0);
  const [input4b, setInput4b] = useState(0);
  const [answer4, setAnswer4] = useState(0);

  // Define a function called 'four' that it returns the smallest of the two numbers it receives
  // as arguments.

  const click4 = () => setAnswer4(four(input4a, input4b));
  // 5.
  const [input5, setInput5] = useState(0);
  const [answer5, setAnswer5] = useState(0);

  // Define a function called 'five' that it randomly returns either 1 (75% of the time) or -1
  // (25% of the time).

  const click5 = () => setAnswer5(five(input5));
  // 6.
  const [input6, setInput6] = useState("");
  const [answer6, setAnswer6] = useState("");

  // Define a function called 'six' that it returns the number of times the lowercase letter e
  // appears in the string it receives as an argument.

  const click6 = () => setAnswer6(six(input6));
  // 7.
  const [input7, setInput7] = useState("");
  const [answer7, setAnswer7] = useState("");

  // Define a function called 'seven' that it returns the string it receives as an argument, but
  // with the first three characters and last three characters removed.

  const click7 = () => setAnswer7(seven(input7));
  // 8.
  const [input8, setInput8] = useState("");
  const [answer8, setAnswer8] = useState("");

  // Define a function called 'eight' that it splits the string it receives as an argument into
  // words at whitespace boundaries, and returns one word chosen at random,
  // repeated a random number of times from 1 to 10

  const click8 = () => setAnswer8(eight(input8));
  // 9.
  const [input9, setInput9] = useState("");
  const [answer9, setAnswer9] = useState("");

  // Define a function called 'nine' that takes a string argument and a number.
  // The function should return all the nth characters of the string, where n is
  // the value of the number argument.

  const click9 = () => setAnswer9(nine(input9));
  return (
    <div className="container">
      <h3>Math and logic</h3>
      <h4>
        1. A function that returns the number it receives as an argument or the
        number 49, whichever is larger.
      </h4>
      <p>
        <input
          type="text"
          value={input1}
          onChange={(e) => setInput1(parseInt(e.target.value))}
        />{" "}
        &nbsp;
        <input type="button" onClick={click1} value="execute" /> &nbsp;
        {"" + answer1}
      </p>
      <h4>
        2. A function that returns the number it receives as an argument or the
        number 512, whichever is smaller.
      </h4>
      <p>
        <input
          type="text"
          value={input2}
          onChange={(e) => setInput2(parseInt(e.target.value))}
        />{" "}
        &nbsp;
        <input type="button" onClick={click2} value="execute" /> &nbsp;
        {"" + answer2}
      </p>
      <h4>
        3. A function that returns the largest of the two numbers it receives as
        arguments.
      </h4>
      <p>
        <input
          type="text"
          value={input3a}
          onChange={(e) => setInput3a(parseInt(e.target.value))}
        />{" "}
        <input
          type="text"
          value={input3b}
          onChange={(e) => setInput3b(parseInt(e.target.value))}
        />{" "}
        &nbsp;
        <input type="button" onClick={click3} value="execute" /> &nbsp;
        {"" + answer3}
      </p>
      <h4>
        4. A function that returns the smallest of the two numbers it receives
        as arguments.
      </h4>
      <p>
        <input
          type="text"
          value={input4a}
          onChange={(e) => setInput4a(parseInt(e.target.value))}
        />{" "}
        <input
          type="text"
          value={input4b}
          onChange={(e) => setInput4b(parseInt(e.target.value))}
        />{" "}
        &nbsp;
        <input type="button" onClick={click4} value="execute" /> &nbsp;
        {"" + answer4}
      </p>
      <h4>
        5. A function that randomly returns either 1 (75% of the time) or -1
        (25% of the time).
      </h4>
      <p>
        <input
          type="text"
          value={input5}
          onChange={(e) => setInput5(parseInt(e.target.value))}
        />{" "}
        &nbsp;
        <input type="button" onClick={click5} value="execute" /> &nbsp;
        {"" + answer5}
      </p>
      <h4>
        6. A function that returns the number of times the lowercase letter e
        appears in the string it receives as an argument.
      </h4>
      <p>
        <input
          type="text"
          value={input6}
          onChange={(e) => setInput6(e.target.value)}
        />{" "}
        &nbsp;
        <input type="button" onClick={click6} value="execute" /> &nbsp;
        {"" + answer6}
      </p>
      <h4>
        7. A function that returns the string it receives as an argument, but
        with the first three characters and last three characters removed.
      </h4>
      <p>
        <input
          type="text"
          value={input7}
          onChange={(e) => setInput7(e.target.value)}
        />{" "}
        &nbsp;
        <input type="button" onClick={click7} value="execute" /> &nbsp;
        {"" + answer7}
      </p>
      <h4>
        8. A function that splits the string it receives as an argument into
        words at whitespace boundaries, and returns one word chosen at random,
        repeated a random number of times from 1 to 10
      </h4>
      <p>
        <input
          type="text"
          value={input8}
          onChange={(e) => setInput8(e.target.value)}
        />{" "}
        &nbsp;
        <input type="button" onClick={click8} value="execute" /> &nbsp;
        {"" + answer8}
      </p>
      <h4>
        9. A function that that takes a string argument and a number. The
        function should return all the nth characters of the string, where n is
        the value of the number argument.
      </h4>
      <p>
        <input
          type="text"
          value={input9}
          onChange={(e) => setInput9(e.target.value)}
        />{" "}
        &nbsp;
        <input type="button" onClick={click9} value="execute" /> &nbsp;
        {"" + answer9}
      </p>
    </div>
  );
};
const domNode = document.getElementsByTagName("body");
const root = createRoot(domNode[0]);
root.render(<Container />);
