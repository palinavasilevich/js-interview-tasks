import { rpnCalculator } from "./rpn-calculator";

describe("RPN Calculator", () => {
  test("Simple operations", () => {
    expect(rpnCalculator("8 2 / 3 +")).toBe(7);
    expect(rpnCalculator("7 2 3 * -")).toBe(1);
  });

  test("Division by zero", () => {
    expect(rpnCalculator("5 0 /")).toBe("Division by zero");
  });

  test("Syntax errors", () => {
    expect(rpnCalculator("2 +")).toBe("Error in Syntax");
    expect(rpnCalculator("")).toBe("Error in Syntax");
  });

  test("Error operands", () => {
    expect(rpnCalculator("2 a +")).toBe("Error in Operands");
  });

  test("One operand", () => {
    expect(rpnCalculator("5")).toBe(5);
  });
});
