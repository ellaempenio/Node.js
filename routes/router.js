const express = require('express');
const ella = require('../controller/Controller')
const routes = express.Router();

routes.get('/', ella.index);
routes.post('/save', ella.save);
routes.get('/display', ella.display);

module.exports = routes;

