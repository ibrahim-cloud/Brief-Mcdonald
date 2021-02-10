const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");


const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require : true,
        
    },
    souCategory: {
        type: ObjectId,
        ref: 'SouCategory',
        require: true
    }
}, {timestamps: true});


module.exports = mongoose.model("Category", categorySchema)