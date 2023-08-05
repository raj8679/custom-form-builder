const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    question: {
        type: String,
    },
    category: {
        type: String,
    },
    match: {
        type: String,
    }
},{
    timestamps: true
});

module.exports = mongoose.model("User", userSchema)