import { describe, expect, it } from "vitest";

import { isAnagram } from "./isAnagram";

describe("isAnagram", () => {
  it("should return true", () => {
    expect(isAnagram("listen", "silent")).toBe(true);
  });

  it("test with sentence", () => {
    expect(isAnagram("rail safety", "fairy tales")).toBe(true);
  });

  it("should return false", () => {
    expect(isAnagram("hello", "world")).toBe(false);
  });
});
