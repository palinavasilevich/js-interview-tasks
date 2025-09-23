import { describe, it, expect } from "vitest";

import { disemvowel } from ".";

describe("Disemvowel Trolls", () => {
  it("Testing for fixed test", () => {
    const result = disemvowel("This website is for losers LOL!");
    expect(result).toStrictEqual("Ths wbst s fr lsrs LL!");
  });

  it("Testing for fixed test", () => {
    const result = disemvowel(
      "No offense but,\nYour writing is among the worst I've ever read"
    );
    expect(result).toStrictEqual("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
  });

  it("Testing for fixed test", () => {
    const result = disemvowel("What are you, a communist?");
    expect(result).toStrictEqual("Wht r y,  cmmnst?");
  });
});
