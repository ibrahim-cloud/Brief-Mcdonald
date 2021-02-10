const mongoose = require("mongoose");


const souCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require : true,
        maxlength: 32,
        trim: true,
        unique: true
    }
}, {timestamps: true});


module.exports = mongoose.model("SouCategory", souCategorySchema)