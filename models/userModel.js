const db = require('../services/database.js').config;


function getUsers(cb) {
    db.query("SELECT * FROM platformUsers", function (err, users, fields) {
        if (err) {
            cb(err)
        } //this is just for error handling
        console.log(users);
        cb(null, users)
    });
}

function getUser(cb, id) {
    let sql = "SELECT * FROM platformUsers WHERE id= " + parseInt(id);
    db.query(sql, function (err, user, fields) {
        if (err) {

            cb(err)
        }
        console.log(user[0])
        cb(null, user[0])
    });

}


//We export functions here so we can use them in the controller
module.exports = {
    getUsers,
    getUser
}