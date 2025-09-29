import { describe, expect, it } from "vitest";
import { compressString } from ".";
describe("Compress String", () => {
  it('compressString("AAB") should return "A2B"', () => {
    expect(compressString("AAB")).toStrictEqual("A2B");
  });
});
