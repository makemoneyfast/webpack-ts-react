import { makeArrayIndex } from "./example";

describe("makeArrayIndex", () => {
  test("0", () => {
    expect(makeArrayIndex(0, 4)).toBe(0);
  });
  test("1", () => {
    expect(makeArrayIndex(1, 4)).toBe(1);
  });
  test("2", () => {
    expect(makeArrayIndex(2, 4)).toBe(2);
  });
  test("3", () => {
    expect(makeArrayIndex(3, 4)).toBe(3);
  });
  test("4", () => {
    expect(makeArrayIndex(4, 4)).toBe(2);
  });
  it("5", () => {
    expect(makeArrayIndex(5, 4)).toBe(1);
  });
  test("6", () => {
    expect(makeArrayIndex(6, 4)).toBe(0);
  });
  test("7", () => {
    expect(makeArrayIndex(7, 4)).toBe(1);
  });
  test("8", () => {
    expect(makeArrayIndex(8, 4)).toBe(2);
  });
  test("9", () => {
    expect(makeArrayIndex(9, 4)).toBe(3);
  });
  test("10", () => {
    expect(makeArrayIndex(10, 4)).toBe(2);
  });
});
