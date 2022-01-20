'use strict';

exports.ok = function(val,res) {
    let data = {
        "status":200,
        "values":val,

    };
    res.json(data);
    res.end();
} 