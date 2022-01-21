const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();


// parse App/Json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));


// call route
let routes = require('./router');
routes(app);

app.use('/auth',require('./middleware'));


app.listen(333,() => {
    console.log(`App Listen on Port 333`);
});