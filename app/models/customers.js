var mongoose = require('mongoose');
var crypto = require('crypto');

// admin Schema
var customerSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name:{
        type: String
    },
    hash: {
        type:String
    },
    salt:{
        type:String
    }
});

var Customer = module.exports = mongoose.model('Customer',customerSchema);

//database query

//check admins

module.exports.getCustomer = function(username, callback){
    var query = {email: username};
    Customer.findOne(query, callback);
    
}


module.exports.getCustomerById = function(id, callback){
    Customer.findById(id, callback);
}



module.exports.updateCustomer = function(id, password, callback, options){
    var password1 = setPassword(password);
    var  query = {_id: id};
    var update = {
        salt:password1.salt,
        hash:password1.hash
    }
    Customer.findOneAndUpdate(query, update, options, callback);
}

function setPassword(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return ({salt:this.salt, hash:this.hash});
  };
  
