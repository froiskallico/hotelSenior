const Guest = require('../models/Guest');

module.exports = {
  async store(req, res) {
    const { nome, documento, telefone } = req.body;

    const guest = await Guest.findOne({ documento });

    try {
      if (!guest) {
        guest = await Guest.crate({
          nome,
          documento,
          telefone,
        });

        return res.json(guest);
      }
      return res
        .status(409)
        .json({ error: 'Hóspede já cadastrado' });
    } catch (err) {
      return res.status(500);
    }
  },

};
