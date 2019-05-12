'use strict';

module.exports = function(app) {
    var status = require('../controllers/status');

    app.route('/status/all')
        .get(status.get_all);

    app.route("/status/:id")
        .put(status.update)
        .get(status.readById)
        .delete(status.delete);

    app.route('/status')
        .get(status.readByCode)
        .post(status.create); //Create

};