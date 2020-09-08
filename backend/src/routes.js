const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchDevController = require('./controllers/SearchDevController');

const routes = Router();

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);
routes.delete('/devs/:github_username', DevController.destroy);
routes.put('/devs/:github_username', DevController.update);

routes.get('/search', SearchDevController.index);

module.exports = routes;
