import CalculateString from "./CalculateString";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(CalculateString("")).toBe(0);
  });
});
