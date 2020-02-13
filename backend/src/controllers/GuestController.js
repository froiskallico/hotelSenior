const Guest = require('../models/Guest');

module.exports = {
  async store(req, res) {
    const { nome, documento, telefone } = req.body;

    let guest = await Guest.findOne({ documento });

    try {
      if (!guest) {
        guest = await Guest.create({
          nome,
          documento,
          telefone,
        });

        return res.json({ guest });
      }
      return res
        .status(409)
        .json({
          error: 'Hóspede já cadastrado com este numero de Documento',
          guest,
        });
    } catch (err) {
      return res.status(500);
    }
  },

  async show(req, res) {
    const {
      nome,
      documento,
      telefone,
      pg,
      pg_size,
    } = req.query;

    const guest = await Guest
      .find({
        nome: new RegExp(nome, 'i'),
        documento: new RegExp(documento, 'i'),
        telefone: new RegExp(telefone, 'i'),
      })
      .limit(parseInt(pg_size) || 10)
      .skip(parseInt(pg_size) * (parseInt(pg) || 0));

    res.json({ guest });
  },

  // async update(req, res) {

  // },

  // async destroy(req, res) {

  // },

};
