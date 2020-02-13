const { Router } = require('express');

const GuestController = require('./controllers/GuestController');

const routes = Router();

routes.post('/guests', GuestController.store);

module.exports = routes;
