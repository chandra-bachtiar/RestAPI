const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// parse App/Json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(333,() => {
    console.log(`App Listen on Port 333`);
});