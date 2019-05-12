'use strict';

let mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
let Status = require('./status')
let Schema = mongoose.Schema;

var machineSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    status: {
        type: ObjectId,
        ref: 'Status',
    },
    deleted: {
        type: Boolean,
        required: false,
    }
});


module.exports = mongoose.model('Machine', machineSchema);