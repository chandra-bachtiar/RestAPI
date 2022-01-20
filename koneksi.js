const mysql = require('mysql');

const conn = mysql.createConnection({
    host:'chand.my.id',
    user:'chand',
    password:'//HalloChand25',
    database:'chandra'
});

conn.connect((err) => {
    if(err) throw err;
    console.log("Koneksi Sukses!")
})