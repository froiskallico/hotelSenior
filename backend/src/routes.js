const { Router } = require('express');

const GuestController = require('./controllers/GuestController');
const BillController = require('./controllers/BillController');

const routes = Router();

routes.post('/guests', GuestController.store);
routes.get('/guests/:_id?', GuestController.index);
routes.put('/guests/:_id', GuestController.update);
routes.delete('/guests/:_id', GuestController.destroy);

routes.post('/bills', BillController.store);
routes.get('/bills', BillController.index);
routes.delete('/bills/:_id', BillController.destroy);

module.exports = routes;
