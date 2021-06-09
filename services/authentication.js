//require the node module
const jwt = require('jsonwebtoken');
//require the token
const ACCESS_TOKEN_SECRET = require('../secrets').access_token_secret;


function authenticateUser({username, password}, users, res) {
    //find the user we are looking for
    const user = users.find(u => {
        return u.username === username && u.password === password
    });
    if (user) {
        //Generate an access token
        const accessToken = jwt.sign({id: user.id, name: user.username}, ACCESS_TOKEN_SECRET);
        res.cookie('accessToken', accessToken);
        res.redirect('/users/' + user.id)
    } else {
        res.send('Username or password incorrect');
    }
}

//User cant access any other page until login
function authenticateJWT(req, res, next) {
    const token = req.cookies['accessToken'];
    if (token) {
        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            console.log(user)
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}



module.exports = {
    authenticateUser,
    authenticateJWT

}
