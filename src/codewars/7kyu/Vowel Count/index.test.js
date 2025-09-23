import { describe, it, expect } from "vitest";

import { getCount } from "./index";

describe("Vowels Count Tests", () => {
  it("should return 5 for 'abracadabra'", () => {
    expect(getCount("abracadabra")).toStrictEqual(5);
  });
});
