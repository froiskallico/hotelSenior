const BillController = require("../BillController");


module.exports = async (checkinDate, checkoutDate, needPark) => {
  checkinDate = new Date(checkinDate);
  checkoutDate = new Date(checkoutDate);


  // eslint-disable-next-line no-extend-native
  Date.prototype.addDays = function(days) {
    const date = new Date(this.valueOf());

    date.setDate(date.getDate() + days);

    return date;
  };

  console.log(checkoutDate);
  console.log(checkinDate);

  if (checkoutDate.getDate() == checkinDate.getDate()) {
    if (checkoutDate <= checkoutDate.setHours(16, 30, 0)) {
      checkoutDate = checkoutDate.addDays(1)
    }
  }

  function getDatesBetween(fromDate, toDate) {
    const dateArray = new Array();

    let currentDate = fromDate.addDays(1);

    while (currentDate <= toDate) {
      dateArray.push(new Date(currentDate));
      currentDate = currentDate.addDays(1);
    }
    return dateArray;
  }

  // eslint-disable-next-line no-extend-native
  Date.prototype.getDailyRate = function(needPark) {
    const weekdayRate = 120;
    const weekendRate = 150;
    const parkWeekdayRate = 15;
    const parkWeekendRate = 20;

    const date = new Date(this.valueOf());
    const day = date.getDay();

    let dailyRate = 0;

    if (day == 6 || day == 0) {
      dailyRate += weekendRate;

      if (needPark) {
        dailyRate += parkWeekendRate;
      }
    } else {
      dailyRate += weekdayRate;

      if (needPark) {
        dailyRate += parkWeekdayRate;
      }
    }

    return dailyRate;
  };

  const dateArray = getDatesBetween(checkinDate, checkoutDate);

  let amount = 0;

  dateArray.forEach(date => {
    const dailyRate = date.getDailyRate(needPark);
    amount += dailyRate;
  });

  const checkoutLimit = new Date(checkoutDate).setHours(16, 30, 00);

  if (checkoutDate > checkoutLimit) {
    const dailyRate = checkoutDate.getDailyRate(needPark);
    amount += dailyRate;
  }

  console.log("valor -> " + amount);
  throw error
  return amount;
};
