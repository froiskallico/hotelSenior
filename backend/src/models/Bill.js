const mongoose = require('mongoose');

const GuestSchema = require('Guest');

const BillSchema = new mongoose.Schema({
  check-in: { type: Date, required: true },
  check-out: Date,
  hospede: {
    type: GuestSchema,
    required: true
  },
  garagem: { type: Boolean, required: true },
  valor: Number
});

module.exports = new mongoose.model('Bill', BillSchema);
