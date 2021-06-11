//require the userModel in the controller to import its functions
const userModel = require("../models/userModel");


function getUsers(req, res, next) {
    userModel.getUsers((err, users) => {
        if (err) {
            res.sendStatus(500) //this is just for error handling
        }
        res.render('test', {users});
    });
}

function getProduct(req, res, next) {
    userModel.getProduct((err, product) => {
        if (err) {
            res.sendStatus(500) //this is just for error handling
        }
        userModel.getUser((err, user) => {
            if (err) {
                res.sendStatus(500) //this is just for error handling
            }
        res.render('marketPlace', {product:product , user:user});
    },req.params.id);
},req.params.id)}

function sendPost(req, res, next) {
    userModel.sendPost((err) => {
        if (err) {
            res.sendStatus(500) //this is just for error handling
        }
        res.redirect('/users/'+req.params.id);
    }, req.body , req.params.id);
}
function getPosts(req, res, next) {
    userModel.getPosts((err, posts) => {
        if (err) {
            res.sendStatus(500) //this is just for error handling
        }
        // console.log(posts)
        userModel.getUser((err, user) => {
            if (err) {
                res.sendStatus(500) //this is just for error handling
            }
            res.render('user', {posts: posts, user: user});
        }, req.params.id , console.log(req.params.id))
    },req.params.id, console.log(req.params.id));
}


function deletePost(req, res, next) {
    userModel.deletePost(
        req.params.id
        , (err, posts) => {
            if (err) {
                return  res.sendStatus(500)
            }
            console.log(posts)
            res.redirect('/users/'+req.params.userId);
        })
}


module.exports = {
    getUsers,
    getProduct,
    sendPost,
    getPosts,
    deletePost
}


