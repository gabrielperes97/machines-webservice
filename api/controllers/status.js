'use strict';

let mongoose = require('mongoose');
let Status = mongoose.model('Status');

exports.create = function (req, res) {
    let new_status = new Status({
        code: req.body.code,
        name: req.body.name,
    });

    new_status.save()
        .then((status) => res.json(status))
        .catch(err => res.status(500).send(err));
};

exports.readById = function (req, res) {
    Status.findById(req.params.id)
        .then((status) => res.json(status))
        .catch((err) => res.status(500).send(err))
};

exports.readByCode = function (req, res) {
    if (req.body.code) {
        Status.findOne({code: req.body.code})
            .then((status) => res.json(status))
            .catch((err) => res.status(500).send(err))
    }
    res.status(500).send(err);
}

exports.get_all = function (req, res) {
    Status.where("deleted").ne(true)
    .then((status) => res.json(status))
    .catch((err) => res.status(500).send(err))
};

exports.update = function (req, res) {
    Status.findByIdAndUpdate(req.params.id, req.body)
        .then((status) => res.json(status))
        .catch((err) => res.status(500).send(err))
};

exports.delete = function (req, res) {
    Status.findByIdAndUpdate(req.params.id, { $set: {deleted: true}})
        .then(() => res.sendStatus(200))
        .catch((err) => res.status(500).send(err))
};
