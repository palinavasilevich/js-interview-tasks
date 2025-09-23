import { describe, it, expect } from "vitest";

import { bookingCalculate } from ".";

describe("Booking Calculate", () => {
  it("Simple Test 1", () => {
    const result = bookingCalculate(1, new Date("2023-11-11"));
    expect(result).toEqual(2200);
  });

  it("Simple Test 2", () => {
    const result = bookingCalculate(5, new Date("2023-11-06"));
    expect(result).toEqual(7500);
  });
});
