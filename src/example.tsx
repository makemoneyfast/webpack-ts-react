import React from "react";

export const lulz = (count: number) => {
  return "LOL!".repeat(count);
};

export const Rofl = (props: { count: number }) => (
  <h1>{"ROFL!".repeat(props.count)}</h1>
);
