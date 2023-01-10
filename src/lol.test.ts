import { makeLol } from "./lol";

describe("makeLOL", () => {
  test("normal scenario", () => {
    expect(makeLol(2)).toBe("LOL LOL");
  });
});
