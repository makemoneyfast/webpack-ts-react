import { lulz } from "./example";

describe("makeLOL", () => {
  test("normal scenario", () => {
    expect(lulz(2)).toBe("LOL!LOL!");
  });
});
