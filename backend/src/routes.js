const { Router } = require('express');

const GuestController = require('./controllers/GuestController');

const routes = Router();

routes.post('/guests', GuestController.store);
routes.get('/guests', GuestController.show);
// routes.get('/guests', GuestController.index);

module.exports = routes;
