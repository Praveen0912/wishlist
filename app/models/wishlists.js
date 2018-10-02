var mongoose = require('mongoose');
//school schema
var wishListSchema =  mongoose.Schema({
    id: {
       type:String,
       required: true
    },
    customerId: {
        type:String,
        required: true
     },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

var WishList = module.exports = mongoose.model('WishList', wishListSchema);


//database query
module.exports.addItem = function(item, callback){
    
    WishList.create({
      id : item._id,
      customerId : item.customerId,  
      name : item.name,
      price : item.price
    }, callback); 
}

module.exports.checkItem = function(item, callback, limit){
    var query ={
        id:item._id,
        customerId : item.customerId
    }
    WishList.find(query, callback).limit(limit);
}

module.exports.getItems = function(customerId, callback, limit){
    var query ={
        customerId : customerId
    }
    WishList.find(query, callback).limit(limit);
}

module.exports.removeItem = function(id, callback){
    var  query = {_id: id};    
    WishList.remove(query, callback);
}


