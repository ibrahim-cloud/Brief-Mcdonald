const mongoose = require("mongoose");
const { categoryId } = require("../controllers/categoryController");
const {ObjectId} = require('mongodb')


const souCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require : true,
        maxlength: 32,
        trim: true,
        unique: true
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        require: true
    }
}, {timestamps: true});


module.exports = mongoose.model("SouCategory", souCategorySchema)