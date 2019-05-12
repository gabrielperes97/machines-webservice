'use strict';

let mongoose = require('mongoose');
let Machine = mongoose.model('Machine');

exports.create = function (req, res) {
    let new_machine = new Machine({
        name: req.body.name,
    });

    new_machine.save()
        .then(machine => res.json({machine}))
        .catch(err => res.sendStatus(500).send(err));
};

exports.read = function (req, res) {
    Machine.findById(req.params.id).populate('status', 'name code')
        .then((machine) => res.json(machine))
        .catch((err) => res.status(500).send(err))
};

exports.get_all = function (req, res) {
    Machine.where("deleted").ne(true).populate('status', 'name code')
    .then((machine) => res.json(machine))
    .catch((err) => res.status(500).send(err))
};

exports.update = function (req, res) {  
    Machine.findByIdAndUpdate(req.params.id, req.body)
        .then((machine) => res.json(machine))
        .catch((err) => res.status(500).send(err))
};

exports.delete = function (req, res) {
    Machine.findByIdAndUpdate(req.params.id, { $set: {deleted: true}})
        .then(() => res.sendStatus(200))
        .catch((err) => res.status(500).send(err))
};

