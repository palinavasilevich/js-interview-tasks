import { it, expect, describe } from "vitest";

import { removeExtraLetters } from ".";

describe("Remove extra letters ", () => {
  it('should return "нужно"', () => {
    const expected = "нужно";
    const actual = removeExtraLetters("нууужно");
    expect(actual).toEqual(expected);
  });

  it('should return "лишний текст"', () => {
    const expected = "лишний текст";
    const actual = removeExtraLetters("ллллиииишшшнийййй тттексттт");
    expect(actual).toEqual(expected);
  });
});
