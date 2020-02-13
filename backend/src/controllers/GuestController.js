const Guest = require('../models/Guest');

module.exports = {
  async store(req, res) {
    const { nome, documento, telefone } = req.body;

    var guest = await Guest.findOne({ documento });

    try {
      if (!guest) {
        guest = await Guest.create({
          nome,
          documento,
          telefone
        });

        return res.json(guest);
      }
      return res
        .status(409)
        .json({
          error: 'Hóspede já cadastrado',
          guest
      });
    } catch (err) {
      return res.status(500);
    }
  },

  async show(req, res) {
    const { nome, documento, telefone } = req.query;

    console.log(nome, documento, telefone);
  }
};
