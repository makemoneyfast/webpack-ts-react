import { exercise } from "./example";

describe(exercise, () => {
  test("returns static string", () => {
    expect(exercise()).toBe("output text");
  });
});
