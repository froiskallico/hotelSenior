const BillController = require('../controllers/BillController');

module.exports = async (guest) => {
  const { _id } = guest;

  async function getTotal(_id) {
    const bills = await BillController.index(
      (req = {
        query: {
          guestId: _id,
        },
      }),
      (res = {
        json(value) {
          return value;
        },
      }),
    );

    let total = 0;

    bills.forEach((bill) => {
      total += Number(bill.valor);
    });

    return total;
  }

  async function getLast() {
    last = 1;

    // TODO: Here get the last bill amount
  }


  return {
    total: await getTotal(_id),
    last: await getLast(_id),
  };
};
