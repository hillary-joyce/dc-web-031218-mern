const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  name: { type: String },
  rating: {
    type: Number,
    min: [1, "please select a number between 1 and 10"],
    max: [10, "please select a number between 1 and 10"]
  },
  comment: { type: String }
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
