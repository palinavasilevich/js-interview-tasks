import { describe, expect, it } from "vitest";
import { evenOrOdd } from "./index";
describe("Sample tests", () => {
  it("2 is even", () => {
    expect(evenOrOdd(2)).toStrictEqual("Even");
  });
  it("7 is odd", () => {
    expect(evenOrOdd(7)).toStrictEqual("Odd");
  });
  it("-42 is even", () => {
    expect(evenOrOdd(-42)).toStrictEqual("Even");
  });
  it("-7 is odd", () => {
    expect(evenOrOdd(-7)).toStrictEqual("Odd");
  });
  it("0 is even", () => {
    expect(evenOrOdd(0)).toStrictEqual("Even");
  });
});
