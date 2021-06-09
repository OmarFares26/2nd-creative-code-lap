const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');//May be irrelevant
const fileUpload = require('express-fileupload');//May be irrelevant
const cookieParser = require('cookie-parser')
const path = require('path');
const ejs = require('ejs');
const db = require('./services/database.js');


//Path of the views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(cors());
app.use(fileUpload({createParentPath: true}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Telling the express module that the public directory has all of our site assets
//serve static file from / public
app.use(express.static(__dirname + '/public'));



//Import the routers into app.js
const indexRouter = require('./routes/index')
//use the router for the desired route
app.use('/', indexRouter)
//Import the routers into app.js
const usersRouter = require('./routes/users')
//use the router for the desired route
app.use('/users', usersRouter)



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});