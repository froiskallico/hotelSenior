const Bill = require('../models/Bill');

module.exports = {
  async store(req, res) {
    const { hospede, dataEntrada, adicionalVeiculo } = req.body;

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
          .send(501)
          .json({ error: 'Erro. Check-in não foi efetuado com sucesso. Por favor, tente novamente!' });
      }
    } catch (err) {
      res.status(500);
    }
  },
};
