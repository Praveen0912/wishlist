const crypto = require('crypto');
var jwt = require('jsonwebtoken');

Customer = require('../models/customers');
Item = require('../models/items');
WishList = require('../models/wishlists');

module.exports.customerLogin = function(req, res) {
    req_customer_username = req.body.email;
    req_customer_password = req.body.password;
    Customer.getCustomer(req_customer_username,function(err, customer){
        if(err){
            res.send({message: 'networkError'});
        }
        else{
            if(customer == null){    
            res.send({message: 'noUser'});  
            }
            else{
                var hash = crypto.pbkdf2Sync(req_customer_password, customer.salt, 1000, 64, 'sha512').toString('hex');
            if(customer.hash === hash){ 
                // create a token
                var token = jwt.sign({
                    _id: customer._id,
                    email: customer.email,
                    name: customer.name,
                    status: true,
                    role: "customer"
                }, 'secretkey', {
                    expiresIn: 606900 // expires in 7 days
                });
                
                res.status(200).send({ "data": token, "_id": customer._id });
            } 
            else{
                res.send({message: 'wrongPassword'});
            }
            }
        }
        
    });
 
}

module.exports.checkCustomerLogin = function(req, res) {
    jwt.verify(req.token,'secretkey',function(err, authData){
        if(err){
            res.send({"status":false});

        } 
        else{
            res.send(authData);
        }
        
    });
}

module.exports.changePassword = function(req, res) {
    jwt.verify(req.token,'secretkey',function(err, authData){  
        if(err){ 
            res.json({message: 'loginError'});

        } else{
            var data = req.body;
                Customer.getCustomerById(authData._id, function(err, customer){
                    if(err){
                        res.json({message: 'fetchingError'});
                    }
                    else{
                        if(customer == null){    
                            res.send({message: 'noUser'});  
                        }
                        else{
                            var hash = crypto.pbkdf2Sync(data.password, customer.salt, 1000, 64, 'sha512').toString('hex');
                        if(customer.hash === hash){ 
                            Customer.updateCustomer(customer._id, data.npassword, function(err, status){
                                if(err){
                                    res.json({message: 'fetchingError'});
                                }
                                else{
                                    res.json({message: true});
                                }
                            });
                            
                        }   
                        else{
                            res.send({message: 'You entered wrong old password'});
                        }
                        } 
                    }
                });
            
            
        }
    });
}

module.exports.getItems = function(req, res){
    jwt.verify(req.token,'secretkey',function(err, authData){  
        if(err){ 
            res.json({message: 'loginError'});

        } else{
            Item.getItems(function(err, items){
                if (err) {
                    res.json({message: 'fetchingError'});
                }    
                else{
                    res.json(items);
                }
            });
        }
    });    
}

module.exports.addToWishList = function(req, res){
    jwt.verify(req.token,'secretkey',function(err, authData){  
        if(err){ 
            res.json({message: 'loginError'});

        } else{
            item = req.body;
            WishList.checkItem(item, function(err, isItem){
                console.log(isItem);
                if(err){
                    res.json({message: 'fetchingError'});
                }
                else if(isItem.length == 0){
                    WishList.addItem(item, function(err, item){
                        if (err) {
                            res.json({message: 'fetchingError'});
                        }    
                        else{
                            res.json({message: true});
                        }
                    });
                }
                else if(isItem !=null){
                    res.json({message: 'Item is already in wish list'});
                }
            });
            
          }
    }); 
}


module.exports.getWishListItems = function(req, res){
    jwt.verify(req.token,'secretkey',function(err, authData){  
        if(err){ 
            res.json({message: 'loginError'});

        } else{
            customerId = req.body._id;
            WishList.getItems(customerId, function(err, items){
                if (err) {
                    res.json({message: 'fetchingError'});
                }    
                else{
                    res.json(items);
                }
            });
        }
    });    
}

module.exports.removeToWishList = function(req, res){
    jwt.verify(req.token,'secretkey',function(err, authData){  
        if(err){ 
            res.json({message: 'loginError'});

        } else{
            _id = req.body._id;
            WishList.removeItem(_id, function(err, item){
                if (err) {
                    res.json({message: 'fetchingError'});
                }    
                else{
                    res.json({message: true});
                }
            });
        }
    }); 
}