//Import node modules express
const express = require('express');
//Telling index.js that it is a router in express
const router = express.Router();
//require authentication
const authenticationService = require('../services/authentication');
//require controller
const userController = require('../controllers/userController');
//require userModel
const userModel = require('../models/userModel');




//Testing that we can get stuff to be viewed on screen
router.get('/', (req, res) => {
    res.send('Hello World!')
});

router.route('/login')
    .get((req, res) => {
        res.render('login')
    })
    .post((req, res) => {
        userModel.getUsers((err, users) => {
            if (err) {
                res.sendStatus(500)
            }
            authenticationService.authenticateUser(req.body, users, res)
        })
    })

router.post('/logout', (req, res) => {
    res.cookie('accessToken', '', {maxAge: 0});
    res.redirect('/login')
})



router.get('/cookies', (req, res) => {
    //read cookie
    console.log(req.cookies);
    //set cookie
    res.cookie('myCookie','Hello world');
    res.send('cookies was set');
});






//export the router that we Imported into app.js
module.exports = router;