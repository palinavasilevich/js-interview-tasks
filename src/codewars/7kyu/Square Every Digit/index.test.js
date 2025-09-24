import { describe, expect, it } from "vitest";

import { squareDigits } from ".";

describe("Square Every Digit", () => {
  it("squareDigits(3212) should equal 9414", () => {
    expect(squareDigits(3212)).toEqual(9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    expect(squareDigits(2112)).toEqual(4114);
  });

  it("squareDigits(0) should equal 0", () => {
    expect(squareDigits(0)).toEqual(0);
  });
});
