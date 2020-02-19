const BillController = require('../controllers/BillController');

module.exports = async (open) => {
  const openBills = await BillController.index(
    (req = { query: { open } }),
    (res = {
      json(value) {
        return value;
      },
    }),
  );

  const presentGuests = [];

  openBills.forEach((bill) => {
    if (presentGuests.map((guest) => guest._id).indexOf(bill.hospede._id) > -1) {
      console.log('Já esta');
    } else {
      presentGuests.push(bill.hospede);
    }
  });

  return presentGuests;
};
