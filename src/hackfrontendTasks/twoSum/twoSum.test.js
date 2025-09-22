import { twoSum } from "./twoSum";
describe("twoSum", () => {
  test("находит пару [3,3] → 6", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("находит пару в большом массиве", () => {
    expect(twoSum([2, 7, 11, 5, 9, 10, 15], 9)).toEqual([0, 1]);
  });

  test("работает с положительными числами", () => {
    expect(twoSum([1, 5, 3, 8], 9)).toEqual([1, 2]);
  });

  test("работает с отрицательными числами", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });
});
