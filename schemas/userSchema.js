const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the user schema that is related to this service
const userSchema = new Schema({
    "userName": {
        type: String,
        required: true,
        unique: true
    },
    "password": {
        type: String,
        required: true,
    },
    "lastActiveAt": {
        type: Date,
        default: Date.now
    },
    "email": {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });


module.exports = userSchema;