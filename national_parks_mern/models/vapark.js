const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const VAParksSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: { type: String },
  img: { type: String },
  url: { type: String },
  description: { type: String },
  addresss: { type: String },
  visitor_center: { type: Boolean },
  entrance_fee: { type: Number },
  hiking: { type: Boolean },
  camping: { type: Boolean },
  comments: [
    {
      //Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      //The ObjectIds will ferer to the ids in the comment model
      ref: "Comment"
    }
  ]
});

const VAPark = mongoose.model("VAPark", VAParksSchema);

module.exports = VAPark;
