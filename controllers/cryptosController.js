const db = require("../models");

// Defining methods for the cryptosController
module.exports = {
  findAll: function(req, res) {
    console.log("test1")
    db.Crypto
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("test2")
    db.Crypto
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByTitle: function(req, res) {
    console.log("test 3")
    db.Crypto
      .find({ title: req.params.title})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },


  create: function(req, res) {
    db.Crypto
      // .find({title:{$exists: true, $in: req.body.title }})
      // .then(dbModel => {
      //   if(dbModel.length > 0){
      //     let total = dbModel[0].author + req.body.author;
      //     const body = {...dbModel[0], author:total}
      // db.Crypto
      // .findOneAndUpdate({ _id: dbModel[0]._id }, body)
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
          
      //   }
      // })
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.body)
    db.Crypto
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Crypto
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};