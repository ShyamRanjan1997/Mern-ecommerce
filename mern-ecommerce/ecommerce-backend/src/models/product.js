const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    slug : {
        type : String,
        required : true,
        unique : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    quantity :{
        type : Number,
        required : true
    },
    offer : {
        type : Number
    },
    productPictures : [
        { 
            img : { 
                type : String 
            }
        }
    ],
    reviews : [
        {
            userId : {
                type :mongoose.Schema.Types.ObjectId, ref : "User",
            },
            review : {
                type : String
            }
        }
    ],
    category : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "Category",
        required : true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId, ref : "User"
    }
}, {timestamps : true});

module.exports = mongoose.model('Product',productSchema);
