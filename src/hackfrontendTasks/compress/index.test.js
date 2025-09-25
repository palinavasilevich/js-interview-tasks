import { describe, it, expect } from "vitest";

import { compressList } from ".";

describe("Compressing a list of numbers into ranges", () => {
  it('compressList([1, 4, 5, 2, 3, 9, 8, 11, 0]) should return "0-5,8-9,11"', () => {
    expect(compressList([1, 4, 5, 2, 3, 9, 8, 11, 0])).toEqual("0-5,8-9,11");
  });

  it('compressList([-10, -8, -7, -6]) should return "-10,-8--6"', () => {
    expect(compressList([-10, -8, -7, -6])).toEqual("-10,-8--6");
  });

  it('compressList([Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER + 1]) should return "-9007199254740991--9007199254740990"', () => {
    expect(
      compressList([Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER + 1])
    ).toEqual("-9007199254740991--9007199254740990");
  });
});
