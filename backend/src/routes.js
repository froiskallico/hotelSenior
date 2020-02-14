const { Router } = require('express');

const GuestController = require('./controllers/GuestController');

const routes = Router();

routes.post('/guests', GuestController.store);
routes.get('/guests/:_id?', GuestController.index);
routes.put('/guests/:_id', GuestController.update);
routes.delete('/guests/:_id', GuestController.destroy);

module.exports = routes;
