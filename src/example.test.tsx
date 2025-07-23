import { divide } from "./example";

describe(divide, () => {
  test("1 / 1", () => {
    expect(divide(1, 1)).toBe(1);
  });

  test("2 / 1", () => {
    expect(divide(2, 1)).toBe(2);
  });
  test("1 / 0", () => {
    expect(divide(1, 0)).toBe(0);
  });
  test("2 / -1", () => {
    expect(divide(2, -1)).toBe(-2);
  });
  test("6 / 3", () => {
    expect(divide(6, 3)).toBe(2);
  });
  test("7 / 3", () => {
    expect(divide(7, 3)).toBe(2);
  });
  test("10 / 3", () => {
    expect(divide(10, 3)).toBe(3);
  });
  test("-1 / 1", () => {
    expect(divide(-1, 1)).toBe(-1);
  });
  test("-1 / -1", () => {
    expect(divide(-1, -1)).toBe(1);
  });
  test("2147483647 / 1", () => {
    expect(divide(2147483647, 1)).toBe(2147483647);
  });

  test("2147483648 / 1", () => {
    expect(divide(2147483647, 1)).toBe(2147483647);
  });
});
