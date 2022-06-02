// To Required modules and frameworks
const mongoose = require('mongoose')

const singleFileUpload = mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    fileSize: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

const model_1 = mongoose.model('singleFile', singleFileUpload)

exports.singleFile = model_1