const model = require("./model");
module.exports = {
    allAuthors: function (req, res) {
        model.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    newAuthor: function (req, res) {
        model.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    addVote: function (req, res) {
        model.findOneAndUpdate({ _id: req.params.id }, { $inc: { votes: 1 } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    downVote: function (req, res) {
        model.findOneAndUpdate({ _id: req.params.id }, { $inc: { votes: -1 } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    addQuote: function (req, res) {
        model.findOneAndUpdate({ _id: req.params.id }, { $push: { quotes: req.body } })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    getQuote: function (req, res) {
        model.findById({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    deleteQuote: function (req, res) {
        model.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}