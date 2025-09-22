import { describe, it, expect } from "vitest";
import { findSubstring } from "./findSubstring.js";

describe("findSubstring", () => {
  it("должна находить строки с подстрокой в любом месте", () => {
    const result = findSubstring("oo", ["food", "door", "moon"]);
    expect(result).toEqual(["food", "door", "moon"]);
  });

  it("должна учитывать регистр символов", () => {
    const result = findSubstring("Oo", ["food", "door", "moon"]);
    expect(result).toEqual([]); // "Oo" != "oo"
  });

  it("должна возвращать пустой массив, если совпадений нет", () => {
    const result = findSubstring("xyz", ["apple", "banana", "cherry"]);
    expect(result).toEqual([]);
  });

  it("должна работать с пустым массивом", () => {
    const result = findSubstring("test", []);
    expect(result).toEqual([]);
  });

  it("должна находить подстроку в начале строки", () => {
    const result = findSubstring("ap", ["apple", "banana", "apricot"]);
    expect(result).toEqual(["apple", "apricot"]);
  });

  it("должна находить подстроку в конце строки", () => {
    const result = findSubstring("na", ["banana", "man", "arena"]);
    expect(result).toEqual(["banana", "arena"]);
  });
});
