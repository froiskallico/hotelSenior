const BillController = require('../controllers/BillController');
const Guest = require('../models/Guest');

module.exports = async (open, pg_size, pg) => {
  const openBills = await BillController.index(
    (req = { query: { open } }),
    (res = {
      json(value) {
        return value;
      },
    }),
  );

  const presentIds = [];

  openBills.forEach((bill) => {
    if (!(presentIds.indexOf(bill.hospede._id) > -1)) {
      presentIds.push(bill.hospede._id);
    }
  });

  const presentGuests = await Guest.find({ _id: { $in: presentIds } })
    .limit(parseInt(pg_size) || 3)
    .skip(parseInt(pg_size) * (parseInt(pg) || 0));

  return presentGuests;
};
