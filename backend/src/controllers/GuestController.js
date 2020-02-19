const Guest = require('../models/Guest');
const CheckPresents = require('../middleware/CheckPresents');

const GetBillsValues = require('../middleware/GetBillsValues');

module.exports = {
  async store(req, res) {
    const { nome, documento, telefone } = req.body;

    let guest = await Guest.findOne({ documento });

    try {
      if (!guest) {
        try {
          guest = await Guest.create({
            nome,
            documento,
            telefone,
          });
        } catch (err) {
          return res.json({ error: err.message });
        }

        return res.json(guest);
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
      present,
    } = req.query;

    const { _id } = req.params;

    let guest;

    if (_id) {
      guest = await Guest.findOne({ _id });
    } else if (present) {
      guest = await CheckPresents(present);
    } else {
      guest = await Guest
        .find({
          nome: new RegExp(nome, 'i'),
          documento: new RegExp(documento, 'i'),
          telefone: new RegExp(telefone, 'i'),
        })
        .limit(parseInt(pg_size) || 10)
        .skip(parseInt(pg_size) * (parseInt(pg) || 0));
    }

    return res.json(guest);
  },

  async update(req, res) {
    const { _id } = req.params;
    const {
      nome, documento, telefone, inside, valor,
    } = req.body;

    const guest = await Guest.findOne({ _id }, (err) => {
      if (err) {
        return res.status(422).json({ error: 'Usuário não encontrado!' });
      }
    });

    try {
      if (guest) {
        guest.nome = nome || guest.nome;
        guest.documento = documento || guest.documento;
        guest.telefone = telefone || guest.telefone;
        guest.valorTotal += valor || guest.valorTotal;
        guest.valorUltimaConta = valor || guest.valorUtimaConta;

        await guest.save();

        return res
          .status(200)
          .json(guest);
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
