import { describe, expect, it, test } from "vitest";

import { reverseString } from "./reverseString";

describe("reserveStr", () => {
  it("should return reserve string", () => {
    const str = "abcd";

    expect(reverseString(str)).toBe("dcba");
  });
});
