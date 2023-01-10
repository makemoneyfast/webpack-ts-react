import React from "react";
import renderer from "react-test-renderer";
import { Rofl } from "./example";

test(`renders correctly`, () => {
  const component = renderer.create(<Rofl count={5} />);
  let rofl = component.toJSON();
  expect(rofl).toMatchSnapshot();
});
