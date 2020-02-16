const Bill = require('../models/Bill');

const GuestValidator = require('./utils/GuestValidator');

module.exports = {
  async store(req, res) {
    const { hospede, dataEntrada, adicionalVeiculo } = req.body;

    if (await GuestValidator(hospede)) {
      try {
        const bill = await Bill.create({
          hospede,
          dataEntrada,
          adicionalVeiculo,
        });

        if (bill) {
          res.json(bill);
        } else {
          res
            .status(501)
            .json({ error: 'Erro. Check-in não foi efetuado com sucesso. Por favor, tente novamente!' });
        }
      } catch (err) {
        res.status(500);
      }
    } else {
      res
        .status(422)
        .json(
          { error: 'Para fazer o Check-in é necessário informar um hóspede já cadastrado!' },
        );
    }
  },

  async index(req, res) {
    const { open } = req.query;
    let bill;

    if (open == undefined) {
      console.log('tudo');
      bill = await Bill.find();
    } else if (open == 'true') {
      console.log('aberto');
      bill = await Bill.find({ dataSaida: { $exists: false } });
    } else if (open == 'false') {
      console.log('Fechado');
      // TODO: fix the search for bill wich "dataSaida" exists in databasec
      bill = await Bill.find({ dataSaida: { $exists: true } });
    }

    return res.json({ bill });
  },

  async update(req, res) {
    const { _id } = req.params;
    const { dataSaida } = req.body;

    const bill = await Bill.findOne({ _id });

    try {
      if (bill) {
        bill.dataSaida = dataSaida;

        bill.save;

        return res.json({ bill });
      }
      res.status(404).json({ error: 'Erro. Conta não encontrada para fazer o checkout!' });
    } catch (err) {
      res.status(500);
    }
  },

  async destroy(req, res) {
    const { _id } = req.params;

    const bill = await Bill.findOneAndDelete({ _id });

    return res
      .status(200)
      .json({
        message: 'Conta deletada com sucesso',
        bill,
      });
  },
};
