const mongoose = require('mongoose');

const RequiredStringType = {
  type: String,
  required: true,
};

const GuestSchema = new mongoose.Schema({
  nome: RequiredStringType,
  documento: RequiredStringType,
  telefone: RequiredStringType,
});

module.exports = new mongoose.model('guest', GuestSchema);
