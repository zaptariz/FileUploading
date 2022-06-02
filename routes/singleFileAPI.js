const express = require('express')
const upload= require('../middleware/fileUploadHelper')
const multer = require('multer')
const singleFile = require('../controller/singleFileUpload')

const router = express.Router()
//middileware for file upload
const uploader = multer({Storage: upload.fileStorage, fileFilter:upload.fileFilter})

router.post('/singlefileupload',uploader.single('image'),singleFile.single_file_upload)
router.get('/singlefileview',singleFile.single_file_view)

module.exports =router