import { capitalize } from "./capitalize";

describe("capitalize", () => {
  test("Example 1", () => {
    expect(capitalize("foo-bar baz")).toBe("Foo-bar Baz");
  });
});
