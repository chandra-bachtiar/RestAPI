'user strict';

let response = require('./res');
let koneksi = require('./koneksi');

exports.index = function(req,res) {
    response.ok("Aplikasi RestAPI Working!",res);
}

exports.showAll = (req,res) => {
    koneksi.query('SELECT * FROM siswa', function(err,row,field) {
        if(err){
            koneksi.log(err);
        } else {
            response.ok(row,res);
        }
    })
}

exports.showById = (req,res) => {
    let id = req.params.id;
    koneksi.query('SELECT * FROM siswa WHERE idsiswa = ?',[id], function(err,row,field) {
        if(err) {
            koneksi.log(err);
        }else{
            response.ok(row,res);
        }
    })
}

exports.addSiswa = (req,res) => {
    let nim = req.body.nim;
    let nama = req.body.nama;
    let kelas = req.body.kelas;
    let prodi = req.body.prodi;

    koneksi.query('INSERT INTO siswa(nim,nama_siswa,kelas,prodi) values(?,?,?,?)',[nim,nama,kelas,prodi],function(err,row,field) {
        if(err) {
            koneksi.log(err);
        } else {
            response.ok("Add Data Success!",res);
        }
    });
}