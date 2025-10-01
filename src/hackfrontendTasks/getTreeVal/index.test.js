import { it, expect, describe } from "vitest";

import { getTreeVal } from ".";

describe("Sum of all values in tree", () => {
  it("should return 10", () => {
    const expected = 10;
    const actual = getTreeVal({
      value: 10,
      children: [],
    });
    expect(actual).toBe(expected);
  });

  it("should return 1", () => {
    const expected = 2;
    const actual = getTreeVal({
      value: 1,
      children: [
        {
          value: 1,
          children: [],
        },
      ],
    });
    expect(actual).toBe(expected);
  });

  it("should return -30", () => {
    const expected = -30;
    const actual = getTreeVal({
      value: -5,
      children: [
        {
          value: -10,
          children: [{ value: -15 }],
        },
      ],
    });
    expect(actual).toBe(expected);
  });
});
