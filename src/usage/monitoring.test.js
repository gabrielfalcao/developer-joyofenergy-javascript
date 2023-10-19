const {
  usageIntervalFromPreviousWeek,
  toUnixTime,
} = require("./interval");

const {
  calculateMonitoring,
} = require("./monitoring");


describe('monitoring', () => {
  describe('calculation of N=2 readings for the duration D=10 days', () => {
    // Given a preset date of reference for "today" at 11:21am
    const todaysDate = new Date(2023, 9, 18, 11, 21);

    // And the database contains N=2 readings for the previous week
    const readingsForMeter0 = [
      { time: toUnixTime(new Date(2023, 9, 13, 8, 36)), reading: 0.26761 },
      { time: toUnixTime(new Date(2023, 9, 11, 8, 36)), reading: 0.26764 },
    ];

    // When I retrieve the result
    const result = calculateMonitoring();
    it('should return the expected result', () => {
      expect(result).toEqual("PENDING IMPLEMENTATION")
    });
  })
})
