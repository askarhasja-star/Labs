import { arraySum, findMax } from "./utils.js";

test("arraySum возвращает корректную сумму", () => {
    expect(arraySum([1, 2, 3])).toBe(6);
    expect(arraySum([-1, 5])).toBe(4);
});

test("findMax должен находить максимум", () => {
    expect(findMax([1, 5, 2])).toBe(5);
    expect(findMax([-3, -1, -7])).toBe(-1);
});