import CalculateString from "./CalculateString";

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(CalculateString("")).toBe(0);
  });

  test("should throw error if negative numbers are included", () => {
    expect(() => CalculateString("1,-2,3")).toThrow("Negative numbers not allowed: -2");
  });

  test("should throw error if negative numbers are included", () => {
    expect(() => CalculateString("1,-2,3,-8")).toThrow("Negative numbers not allowed: -2, -8");
  });
});
