'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
var statusSchema = new Schema ({
    code: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    deleted: {
        type: Boolean,
        required: false,
    }

});

module.exports = mongoose.model('Status', statusSchema);