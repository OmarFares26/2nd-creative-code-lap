//Import node modules express
const express = require('express');
//Telling index.js that it is a router in express
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/',userController.getUsers);
router.get('/:id',userController.getUser);


















module.exports = router;