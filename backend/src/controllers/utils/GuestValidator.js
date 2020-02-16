const Guest = require('../../models/Guest');

module.exports = async (guest) => {
  const { _id } = guest;

  try {
    const fetchedGuest = await Guest.findOne({ _id });

    return fetchedGuest;
  } catch (err) {
    return false;
  }
};
