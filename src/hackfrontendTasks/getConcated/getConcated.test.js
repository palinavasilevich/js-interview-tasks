import { getConcated } from "./getConcated";

describe("getConcated", () => {
  test("Test 1: Simple data", () => {
    const data = [
      { value: "hello", order: 1, expired: false },
      { value: "world", order: 2, expired: false },
    ];

    const result = "olehdrw";

    expect(getConcated(data)).toEqual(result);
  });

  test("Test 2: Data with expired = true", () => {
    const data = [
      { value: "aabb", order: 1, expired: false },
      { value: "bbaa", order: 2, expired: true },
      { value: "bbaa", order: 3, expired: false },
    ];

    const result = "ba";

    expect(getConcated(data)).toEqual(result);
  });
});
