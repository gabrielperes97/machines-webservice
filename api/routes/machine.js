'use strict';

module.exports = function(app) {
    var machine = require('../controllers/machine');

    app.route('/machine/all')
        .get(machine.get_all);

    app.route('/machine/:id')
        .get(machine.read)
        .put(machine.update)
        .delete(machine.delete);

    app.route('/machine')
        .post(machine.create); //Create
};