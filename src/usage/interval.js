const toUnixTime = (date) => {
  if (date instanceof Date) {
    return date.getTime() / 1000;
  }
  throw new Error(`toUnixTime expects a Date as parameter but received something else instead: "${date}"`)
}

const usageInterval = (start, end) => ({
  start: toUnixTime(start),
  end: toUnixTime(end)
});

const getSyndayOfTheWeek = (currentDate) => {
  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  const today = date.getDate();
  const dayOfTheWeek = date.getDay();
  const newDate = date.setDate(today - (dayOfTheWeek || 7));

  return new Date(newDate);
}

const usageIntervalFromPreviousWeek = (today = new Date()) => {
  let currentWeekSunday = getSyndayOfTheWeek(today);
  let previousWeekSunday = new Date(currentWeekSunday);
  previousWeekSunday.setDate(previousWeekSunday.getDate() - 7);
  return usageInterval(previousWeekSunday, currentWeekSunday);
}

module.exports = {
  toUnixTime,
  usageInterval,
  usageIntervalFromPreviousWeek
}
