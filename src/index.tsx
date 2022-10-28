import { Component } from "react";
import { render } from "react-dom";

import "./style.css";
import { shout } from "./shouting";

const element = document.createElement("div");
document.body.appendChild(element);

type jjj = string | boolean;

let pp: jjj;

let jj = pp as "35";

class Hoho extends Component<{ name: string }> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const options = [
  {
    caption: "One",
    value: "1",
  },
  {
    caption: "Two",
    value: "2",
  },
  {
    caption: "Three",
    value: "3",
  },
];

const makeSelect = (value: string) => {
  const optionNodes = options.map((option) => (
    <div key={option.value}>
      <input
        type="radio"
        id={option.value}
        name="groupName"
        value={option.value}
        onChange={() => {
          console.log("Clicked", option.value);
          repaint(option.value);
        }}
        checked={option.value === value}
      />
      <label className="form-check-label" htmlFor={option.value}>
        {option.caption}
      </label>
    </div>
  ));
  return <div>{optionNodes}</div>;
};

const repaint = (value: string) => {
  const uniqueControlId = "sandwich";
  render(
    <div>
      <h1>Hello! I am React in Typescript.</h1>

      <div className="form-group">
        <label htmlFor={uniqueControlId}>{"Hi"}</label>
        <input
          className="form-control"
          id={uniqueControlId}
          defaultValue={"yass"}
        />
      </div>
    </div>,
    element
  );
};
repaint("1");
shout();
