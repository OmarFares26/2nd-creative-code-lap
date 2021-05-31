const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//Telling the express module that the public directory has all of our site assets
app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));

//Testing that we can get stuff to be viewed on screen
app.get('/', (req, res) => {
    res.send('Hello World!')
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});