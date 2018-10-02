var mongoose = require('mongoose');

//school schema
var itemsSchema =  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

var Item = module.exports = mongoose.model('Item', itemsSchema);


//database query
module.exports.addItem = function(item, callback){
    Item.create({
      name : item.name,
      price : item.price
    }, callback); 
}
module.exports.getItems = function(callback, limit){
    Item.find(callback);
}

module.exports.getItemById = function(id, callback){
    Item.findById(id, callback);
}

module.exports.updateItem = function(item, callback, options){
    var  query = {_id: item._id};
    var update = {
        name: '',
    }
      
    Item.findOneAndUpdate(query, update,options,callback);
}

module.exports.deleteItem = function(id, callback){
    var  query = {_id: id};    
    Item.remove(query, callback);
}


