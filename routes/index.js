const routes = require('express').Router();
const myControllers = require('../controllers');

routes.get('/', myControllers.awesomeFunction);
routes.get('/awesome', myControllers.returnAwesomePerson)

module.exports = routes
