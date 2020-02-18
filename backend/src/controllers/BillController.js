const Bill = require('../models/Bill');

const GuestValidator = require('./utils/GuestValidator');
const BillCalculator = require('./utils/BillCalculator');


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
          return res.json(bill);
        }
        return res
          .status(501)
          .json({ error: 'Erro. Check-in não foi efetuado com sucesso. Por favor, tente novamente!' });
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res
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
      bill = await Bill.find();
    } else if (open == 'true') {
      bill = await Bill.find({ dataSaida: { $exists: false } });
    } else if (open == 'false') {
      bill = await Bill.find({ dataSaida: { $exists: true } });
    }

    return res.json({ bill });
  },

  async update(req, res) {
    const { _id } = req.params;
    const { dataSaida } = req.body;

    let bill;

    try {
      bill = await Bill.findOne({ _id });
    } catch (err) {
      return res.status(422).json({ error: 'Erro. Conta não encontrada para fazer o checkout!' });
    }

    if (dataSaida < bill.dataEntrada) {
      return res.json({ error: 'Erro. A data de saída deve ser posterior à data de entrada' });
    }

    try {
      bill.dataSaida = dataSaida;

      try {
        const billAmount = BillCalculator(bill.dataEntrada, dataSaida, bill.adicionalVeiculo);
        bill.valor = billAmount;
      } catch (err) {
        throw (err.message);
      }

      bill.save();

      return res.json({ bill });
    } catch (err) {
      return res.status(500).json(err);
    }
  },

  async destroy(req, res) {
    const { _id } = req.params;

    let bill;

    try {
      await Bill.findOneAndDelete({ _id });
    } catch (err) {
      return res.status(500).json(err.message);
    }

    return res
      .status(200)
      .json({
        message: 'Conta deletada com sucesso',
        bill,
      });
  },
};