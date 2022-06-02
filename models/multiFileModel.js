const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mulitiFileUpload = new Schema({
    title: {
        type: String,
        required: true
    },
    files: [
        Object
    ]
}, {
    timestamps: true
});

const mod = mongoose.model('multiplefiles',mulitiFileUpload)
exports.model =mod