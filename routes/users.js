//Import node modules express
const express = require('express');
//Telling index.js that it is a router in express
const router = express.Router();
const userController = require('../controllers/userController');
const authenticationService = require('../services/authentication');
router.use(authenticationService.authenticateJWT);


 router.get('/',userController.getUsers);

router.get('/:id',userController.getPosts);

router.post('/:id/Post',userController.sendPost);

router.post('/:userId/:id/delete',userController.deletePost);

router.get('/:id/shop/marketPlace',userController.getProduct);












module.exports = router;