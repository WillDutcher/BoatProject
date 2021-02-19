// import my controllers
const SkiffsController = require('../controllers/skiffs.controller');
// const BoatController = require('../controllers/boat.controller');
// const Boat = require('../models/boat.model');

module.exports = function(app) {
    app.get('/api/skiffs', SkiffsController.getAll);
    app.post('/api/skiffs', SkiffsController.create);
    app.get('/api/skiffs/:id', SkiffsController.getOne);
    app.put('/api/skiffs/:id', SkiffsController.update);
    app.delete('/api/skiffs/:id', SkiffsController.removeOne);
}