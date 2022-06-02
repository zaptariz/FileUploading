const { singleFile } = require('../models/singleFileModel')
const format = require('../helpers/fileFormatHelper')

/******************************************************
* Single File Upload controller 
@returns {object} //
*******************************************************/
const file_format = format.fileformat

const single_file_upload = async (req, res) => {
    try {
        const body = req.body
        let payload = new singleFile({
            fileName: req.file.originalname,
            fileType: req.file.mimetype,
            fileSize: file_format(req.file.size, 2)
        })
        await new singleFile(payload).save()
        return res.status(200).json(payload)
    } catch (error) {
        res.status(401).send(error.message)
    }
}

const single_file_view = async (req, res) => {
    try {
        const response = await singleFile.find({})
        return res.status(200).json(response)
    } catch (error) {
        return res.status(401).send({ "error  ": error.message })
    }

}

module.exports = {
    single_file_upload,
    single_file_view
}