'use strict';

exports.ok = function (val, res) {
    let data = {
        "status": 200,
        "values": val,

    };
    res.json(data);
    res.end();
}

exports.nested = function (val, res) {
    // akumulasi
    const hasil = val.reduce((akumulasi, items) => {
        if (akumulasi[items.nama_siswa]) {
            const group = akumulasi[items.nama_siswa]
            if (Array.isArray(group.matakuliah)) {
                group.matakuliah.push(items.matakuliah)
            } else {
                group.matakuliah = [group.matakuliah, items.matakuliah]
            }
        } else {
            akumulasi[items.nama_siswa] = items;
        }
        return akumulasi;
    }, {});

    let data = {
        "status": 200,
        "values": hasil,

    };
    res.json(data);
    res.end();
}