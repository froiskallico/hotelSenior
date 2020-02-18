 // eslint-disable-next-line no-extend-native
Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());

  date.setDate(date.getDate() + days);

  return date;
};

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
Date.prototype.getDailyRate = function (needPark) {
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

async function BillCalculator(hospede, checkinDate, checkoutDate, needPark) {
  checkinDate = new Date(checkinDate);
  checkoutDate = new Date(checkoutDate);

  const dateArray = getDatesBetween(checkinDate, checkoutDate);

  let amount = 0;

  dateArray.forEach((date) => {
    const dailyRate = date.getDailyRate(needPark);
    amount += dailyRate;
  });

  const checkoutLimit = new Date(checkoutDate).setHours(16, 30, 00);

  if (checkoutDate > checkoutLimit) {
    const dailyRate = checkoutDate.getDailyRate(needPark);
    amount += dailyRate;
  }

  // TODO: Here update guest.valorTotal and guest.valorUltimaEstadia with the amount value

  return amount;
}

module.exports = BillCalculator;
