function createMonthIndexesList(_, index) {
  return index;
}

function listAllYears13Th(year) {
  return function (_, monthIndex) {
    return new Date(year, monthIndex, 13).getDay();
  }
}

function getBlackFridays(date) {
  return date === 5;
}

function unluckyDays(year) {
  return (
    Array
      .from({ length: 12 }, createMonthIndexesList)
      .map(listAllYears13Th(year))
      .filter(getBlackFridays)
      .length
    );
}

module.exports = unluckyDays;
