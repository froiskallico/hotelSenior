const mongoose = require('mongoose');

const GuestSchema = require('./Guest');

const BillSchema = new mongoose.Schema({
  hospede: {
    type: { GuestSchema },
    required: true,
  },
  dataEntrada: { type: Date, required: true },
  dataSaida: Date,
  adicionalVeiculo: { type: Boolean, required: true },
  valor: Number,
});

module.exports = new mongoose.model('Bill', BillSchema);
