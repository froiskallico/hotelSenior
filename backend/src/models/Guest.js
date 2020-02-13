const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  documento: { type: String, required: true },
  telefone: { type: String, required: true },
});

module.exports = new mongoose.model('Guest', GuestSchema);
