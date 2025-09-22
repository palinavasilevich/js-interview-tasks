import { getNodes } from "./getNodes";

describe("getNodes", () => {
  test("Example 1: flat + nested children", () => {
    const tree = {
      type: "nested",
      children: [
        { type: "added", value: 42 },
        {
          type: "nested",
          children: [{ type: "added", value: 43 }],
        },
        { type: "added", value: 44 },
      ],
    };

    const result = [
      { type: "added", value: 42 },
      { type: "added", value: 43 },
      { type: "added", value: 44 },
    ];

    expect(getNodes(tree, "added")).toEqual(result);
  });

  test("Example 2: nested + sibling", () => {
    const tree = {
      type: "nested",
      children: [
        {
          type: "nested",
          children: [{ type: "added", value: 50 }],
        },
        { type: "added", value: 51 },
      ],
    };

    const result = [
      { type: "added", value: 50 },
      { type: "added", value: 51 },
    ];

    expect(getNodes(tree, "added")).toEqual(result);
  });

  test("Example 3: deeply nested single match", () => {
    const tree = {
      type: "nested",
      children: [
        {
          type: "nested",
          children: [
            {
              type: "nested",
              children: [{ type: "added", value: 60 }],
            },
          ],
        },
      ],
    };

    const result = [{ type: "added", value: 60 }];

    expect(getNodes(tree, "added")).toEqual(result);
  });

  test("No matches", () => {
    const tree = {
      type: "nested",
      children: [{ type: "nested", children: [] }],
    };

    expect(getNodes(tree, "removed")).toEqual([]);
  });

  test("Root itself matches", () => {
    const tree = { type: "added", value: 99 };

    expect(getNodes(tree, "added")).toEqual([{ type: "added", value: 99 }]);
  });
});
