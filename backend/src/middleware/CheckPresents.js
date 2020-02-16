const BillController = require('../controllers/BillController');

module.exports = async (open) => {
  const openBills = await BillController.index(
    req = { query: { open } },
    res = {
      json(value) {
        return value;
      },
    },
  );

  const presentGuests = [];

  openBills.bill.forEach((bill) => {
    presentGuests.push(bill.hospede);
  });

  return presentGuests;
};
