require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const port = process.env.SERVER_PORT || 3333;

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(port);
