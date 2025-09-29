import { describe, it, expect } from "vitest";
import { joinStrings } from ".";

describe("Joining lines using a separator", () => {
  it("joinStrings(' ', 'Hello', 'World') should return 'Hello World'", () => {
    const result = joinStrings(" ", "Hello", "World");
    expect(result).toEqual("Hello World");
  });

  it("joinStrings('-', 'a', 'b', 'c', 'd') should return 'a-b-c-d'", () => {
    const result = joinStrings("-", "a", "b", "c", "d");
    expect(result).toEqual("a-b-c-d");
  });

  it("joinStrings(':', 'one', 'two') should return 'one:two'", () => {
    const result = joinStrings(":", "one", "two");
    expect(result).toEqual("one:two");
  });
});
