'use strict';

module.exports = function(app) {
    let json = require('./controller');

    app.route('/').get(json.index);

    app.route('/showAll').get(json.showAll);
    
    app.route('/showALl/:id').get(json.showById);

    app.route('/add').post(json.addSiswa);
}