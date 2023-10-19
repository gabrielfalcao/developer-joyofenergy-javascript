const {usageIntervalFromPreviousWeek} = require("./interval");
const {toUnixTime} = require("./interval");

describe("interval", () => {
  describe("toUnixtime", () => {
    it("should take a `Date' instance and return its unix timestamp divided by 1000", ()=>{
      // Given a preset date as subject-under-test
      const refdate = new Date(2021, 8, 25, 10, 15); // 2021-09-25

      // When I call toUnixtime() passing the aforementioned subject as parameter
      const result = toUnixTime(refdate);

      // Then the result should equal to the return value of valueOf() / 1000
      expect(refdate.valueOf()).toEqual(1632564900000)
      expect(result).toEqual(1632564900)
     });
    it("should appear quite clear when the parameter is not a date", ()=>{
      // Given a non-Date object as subject-under-test
      const refdate = new ArrayBuffer();

      // When I call toUnixtime() passing the aforementioned subject as parameter
      const closure = () => toUnixTime(refdate)

      // Then that closure should bring an explaination of what went wrong
      expect(closure).toThrow("toUnixTime expects a Date as parameter but received something else instead: \"[object ArrayBuffer]\"")
    });
  });
  describe("usageIntervalFromPreviousWeek", () => {
      it("should return the current week start as interval ending", () => {
      const date = new Date(2021, 8, 25, 10, 15); // 2021-09-25

      expect(usageIntervalFromPreviousWeek(date).end)
        .toBe(new Date(2021, 8, 19).getTime() / 1000);  // 2021-09-19
    });

    it("should return the previews week start as interval start", () => {
      const date = new Date(2021, 8, 25, 10, 15); // 2021-09-25

      expect(usageIntervalFromPreviousWeek(date).start)
        .toBe(new Date(2021, 8, 12).getTime() / 1000);  // 2021-09-12
    });
  });
});
