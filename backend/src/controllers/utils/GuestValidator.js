const Guest = require('../../models/Guest');

module.exports = async (guest) => {
  try {
    const { _id } = guest;
    const fetchedGuest = await Guest.findOne({ _id });

    return fetchedGuest;
  } catch (err) {
    return false;
  }
};
