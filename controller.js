'user strict';

let response = require('./res');
let koneksi = require('./koneksi');

export.index = function(req,res) {
    response.ok("Aplikasi RestAPI Working!");
}