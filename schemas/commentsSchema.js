const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CommentSchema = new Schema({
    parentID: String,
    comment: String,
    author: String,
    edited: Boolean,
},{timestamps: true});

CommentSchema.add({ comments: [CommentSchema] });

module.exports = CommentSchema;