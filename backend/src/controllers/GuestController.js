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
          error: 'Hóspede já cadastrado com este numero de documento',
          guest,
        });
    } catch (err) {
      return res.status(500);
    }
  },

  async index(req, res) {
    const {
      nome,
      documento,
      telefone,
      pg,
      pg_size,
    } = req.query;

    const { _id } = req.params;

    let guest;

    if (_id) {
      guest = await Guest.findOne({ _id });
    } else {
      console.log('OI');
      guest = await Guest
        .find({
          nome: new RegExp(nome, 'i'),
          documento: new RegExp(documento, 'i'),
          telefone: new RegExp(telefone, 'i'),
        })
        .limit(parseInt(pg_size) || 10)
        .skip(parseInt(pg_size) * (parseInt(pg) || 0));
    }

    res.json({ guest });
  },

  async update(req, res) {
    const { _id } = req.params;
    const { nome, documento, telefone } = req.body;

    const guest = await Guest.findOne({ _id }, (err) => {
      if (err) {
        return res.status(404).json({ error: 'Usuário não encontrado!' });
      }
    });

    try {
      if (guest) {
        guest.nome = nome || guest.nome;
        guest.documento = documento || guest.documento;
        guest.telefone = telefone || guest.telefone;

        await guest.save();

        return res
          .status(200)
          .json({ guest });
      }
    } catch (err) {
      return res.status(500);
    }
  },

  async destroy(req, res) {
    const { _id } = req.params;

    const guest = await Guest.findOneAndDelete({ _id });

    return res
      .status(200)
      .json({
        message: 'Hóspede deletado com sucesso',
        guest,
      });
  },

};
