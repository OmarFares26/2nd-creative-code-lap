//require the userModel in the controller to import its functions
const userModel = require("../models/userModel");


function getUsers(req, res, next) {
    userModel.getUsers((err, users) => {
        if (err) {
            res.sendStatus(500) //this is just for error handling
        }
        res.render('users', {users});
    });
}

function getUser(req, res, next) {
    userModel.getUser((err, user) => {
        if (err) {
            res.sendStatus(500) //this is just for error handling
        }
        res.render('user', {user});
    }, req.params.id);
}








module.exports = {
    getUsers,
    getUser
}


