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
  test("should return sum of two numbers", () => {
    expect(CalculateString("1,3")).toBe(4);
  });
  test("should handle new lines between numbers", () => {
    expect(CalculateString("1\n2,3")).toBe(6);
  });
  test("should handle multiple custom delimiters", () => {
    expect(CalculateString("//[*][%]\n1*2%3")).toBe(6);
  });
  test("should handle multiple custom delimiters", () => {
    expect(CalculateString("//[*][%]\n1*2%3")).toBe(6);
  });
  test("should support custom delimiters", () => {
    expect(CalculateString("//;\n1;2;3")).toBe(6);
  });
});
