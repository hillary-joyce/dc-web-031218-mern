const db = require("../models");

module.exports = {
  //Find all VA Parks
  findAll: function(req, res) {
    db.VAPark.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //Find One VA Parks
  findOne: function(req, res) {
    db.VAPark.findOne({ _id: req.params.park_id })
      .populate("comments")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Comment.create({
      name: req.body.name,
      rating: req.body.rating,
      comment: req.body.comment
    })
      .then(function(dbComment) {
        return db.VAPark.findOneAndUpdate(
          { _id: req.params.park_id },
          { $push: { comments: dbComment._id } },
          { new: true }
        );
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Comment.deleteOne({ _id: req.params.comment_id })
      .then(function(dbComment) {
        return db.VAPark.findOneAndUpdate(
          { _id: req.params.park_id },
          { $pull: { comments: dbComment._id } }
        );
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
