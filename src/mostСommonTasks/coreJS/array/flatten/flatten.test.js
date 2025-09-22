import { describe, expect, it } from "vitest";
import { flatten } from "./flatten";

describe("flatten array", () => {
  it("", () => {
    const result = flatten([1, [2, 3], [4, [5, 6]]]);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
