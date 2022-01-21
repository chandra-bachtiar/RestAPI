'use strict';

module.exports = function(app) {
    let json = require('./controller');

    app.route('/').get(json.index);

    app.route('/showAll').get(json.showAll);
    
    app.route('/showALl/:id').get(json.showById);

    app.route('/add').post(json.addSiswa);
    
    app.route('/change').put(json.changeData);

    app.route('/delete').delete(json.deleteData);

    app.route('/showNested').get(json.showNested);
}