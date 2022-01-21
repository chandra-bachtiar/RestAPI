const koneksi = require('../koneksi');
const mysql = require('mysql');
const md5 = require('MD5');
const response = require('../res')
const jwt = require('jsonwebtoken');
const config = require('../config/secret');
const ip = require('ip');

//

exports.register = (req,res) => {
    let post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
    }

    let query = `SELECT email From user where email = ?`;
    koneksi.query(query,[post.email], function(err,rows) {
        if(!err) {
            if(rows.length == 0) {
                let query = `INSERT INTO user(username,email,password) VALUES(?,?,?)`;
                koneksi.query(query,[post.username,post.email,post.password],function(err,rows) {
                    if(!err) {
                        response.ok("Register User Success!",res);
                    } else {
                        console.log(err);
                    }
                })
            } else {
                response.ok("Email already Use!",res)
            }
        }
    })

}