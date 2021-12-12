import { windDirection } from "./windDirection";

describe("Testing wind direction function", () => {
  test("Return wind direction = Notherly", () => {
    expect(windDirection(350)).toBe("Northerly");
  });
   test("Return wind direction = Westerly", () => {
     expect(windDirection(250)).toBe("Westerly");
   });
});
