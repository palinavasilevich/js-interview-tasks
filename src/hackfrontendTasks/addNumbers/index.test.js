import { describe, expect, it } from "vitest";

import { addNumbers } from ".";

describe("Addition of numbers represented by arrays", () => {
  it("addNumbers([1, 2, 3], [4, 5, 6]) should return [5, 7, 9]", () => {
    const result = addNumbers([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([5, 7, 9]);
  });

  it("addNumbers([5, 4, 4], [4, 5, 6]) should return [1, 0, 0, 0]", () => {
    const result = addNumbers([5, 4, 4], [4, 5, 6]);
    expect(result).toEqual([1, 0, 0, 0]);
  });

  it("addNumbers([5, 4, 4], [4, 5, 6]) should return [1, 0, 0, 0]", () => {
    const result = addNumbers([9, 9, 9], [1]);
    expect(result).toEqual([1, 0, 0, 0]);
  });
});
