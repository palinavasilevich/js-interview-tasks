import { describe, it } from "vitest";

import { getRoute } from "./getRoute";

describe("getRoute", () => {
  it("", () => {
    const result = getRoute([
      { from: "London", to: "Moscow" },
      { from: "NY", to: "London" },
      { from: "Moscow", to: "SPb" },
    ]);

    const correctAnswer = [
      { from: "NY", to: "London" },
      { from: "London", to: "Moscow" },
      { from: "Moscow", to: "SPb" },
    ];
    expect(result).toEqual(correctAnswer);
  });
});
