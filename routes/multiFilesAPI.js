const express = require('express')
const multer = require('multer')
const upload = require('../middleware/fileUploadHelper')
const multifile = require('../controller/multiFileUpload')

const router = express.Router()

//middileware for file upload
const uploader = multer({Storage: upload.fileStorage, fileFilter:upload.fileFilter})


router.post('/multiupload', uploader.array('images'), multifile.multi_File_Upload)
router.get('/multifileview', multifile.multiple_File_View)

module.exports = router