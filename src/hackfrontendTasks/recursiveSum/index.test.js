import { describe, it, expect } from "vitest";

import { recursiveSum } from ".";

describe("Recursive Sum", () => {
  it("should return recursive sum of all number", () => {
    const result = recursiveSum({
      x: 5,
      y: {
        z: 7,
        w: {
          v: -3,
        },
      },
    });

    expect(result).toEqual(9);
  });

  it("should return recursive sum of all number", () => {
    const result = recursiveSum({
      a: "text",
      b: {
        c: true,
        d: null,
        e: 5,
      },
    });

    expect(result).toEqual(5);
  });
});
