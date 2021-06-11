//require database
const db = require('../services/database.js').config;


function getUsers(cb) {
    db.query("SELECT * FROM platformUsers ", function (err, users, fields) {
        if (err) {
            cb(err)
        }
        // console.log(users);
        cb(null, users)
    });
}

function getUser(cb, id) {
    let sql = "SELECT * FROM platformUsers WHERE id= " + parseInt(id);
    db.query(sql, function (err, user, fields) {
        if (err) {
            cb(err)
        }
        // console.log(user)
        cb(null, user)
    });
}

function getProduct(cb,id) {
   let sql = "SELECT * FROM platformUsers INNER JOIN productsCards WHERE platformUsers.id ="+ parseInt(id);
    db.query(sql, function (err, product, fields) {
        if (err) {
            cb(err)
        }
        // console.log(product)
        cb(null, product)
    });
}

function sendPost(cb,userInput,id) {
    // console.log(userInput)
    let sql = "INSERT INTO usersPosts  (Written_Posts , userId) VALUES ('"+userInput.writePost+"','"+id+"')";
    // db.query(`INSERT INTO usersPosts (Written_Posts , userId) VALUES (${db.escape(userInput.writePost)},${db.escape(id)})`, (err) =>{
    db.query(sql, function (err){
        if (err) {
            cb(err)
        }
        cb(null)
    })
}

function getPosts(cb,id){
    let sql = "SELECT * FROM usersPosts WHERE userId ="+id;
    // console.log(sql)
    db.query(sql, function (err, posts, fields){
        if (err) {
            cb(err, null)
        }
        // console.log(posts)
        cb(null, posts)
    });
}


function deletePost(id,cb) {
    let sql = "DELETE  FROM usersPosts WHERE id ="+id ;
    // console.log(sql)
    db.query(sql, function (err, result, fields) {
        if (err) {
            cb(err)
        }
        cb(null, result);
    })

}

//We export functions here so we can use them in the controller
module.exports = {
    getUsers,
    getUser,
    getProduct,
    sendPost,
    getPosts,
    deletePost
}