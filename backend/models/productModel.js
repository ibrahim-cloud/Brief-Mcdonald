const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const {ObjectId} = require('mongodb')


const productSchema = new mongoose.Schema({
 
    name: {
        type: String,
        maxlength: 32,
        trim: true
    },
    description: {
        type: String
       
    },

    price: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    souCategory: {
        type: ObjectId,
        ref: 'SouCategory',
        require: true
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        require: true
    }

}, {timestamps: true})


module.exports = mongoose.model("Product", productSchema)