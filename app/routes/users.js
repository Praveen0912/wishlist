const express = require('express');
const router = express.Router();
const customerApi = require('../controllers/customerApi');
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
  //Get auth header value
  const bearerHeader = req.headers['authorization'];
  //check  if bearer is undefined

  if(typeof bearerHeader !== "undefined"){
  //split at space
  const bearer = bearerHeader.split(' ');
  //Get token from array
  const bearerToken = bearer[1];
  //set the token
  req.token = bearerToken;
  
  //next middleware
  next();
  }
  else{
  //Forbidden
  res.json({message:'headerUndefined'});
  }
}

router.post('/customer', customerApi.customerLogin);
router.get('/customer', verifyToken, customerApi.checkCustomerLogin);
router.put('/customer/:_id', verifyToken, customerApi.changePassword);
router.get('/items', verifyToken, customerApi.getItems);

router.put('/wishList/:_id', verifyToken, customerApi.getWishListItems);
router.post('/wishList', verifyToken, customerApi.addToWishList);
router.delete('/wishList', verifyToken, customerApi.removeToWishList);


module.exports = router;
