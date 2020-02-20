const Guest = require('../models/Guest')

module.exports = UpdateGuestValues = async(guestId, amount) => {

  try {
    const guest = await Guest.findById(guestId);

    guest.valorTotal += amount;
    guest.valorUltimaConta = amount;

    guest.save()

  } catch(err) {
    return err
  }

}
