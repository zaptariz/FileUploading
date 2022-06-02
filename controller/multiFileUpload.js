const { model } = require('../models/multiFileModel')
const fileFormatHelper = require('../helpers/fileFormatHelper')


/******************************************************
* Multiple File Upload controller 
@returns {ArrayOfObject} // [{}]
*******************************************************/

const multi_File_Upload = async (req, res) => {
    try {
        let bulkFile = []
        let count = 0
        for(count ; count <req.files.length; count++){
            let data = req.files[count]
            const payload = {
                fileName: data.originalname,
                fileType: data.mimetype,
                fileSize: fileFormatHelper.fileformat(data.size, 2)
            }
            bulkFile.push(payload)
        }
        const payload = new model({
            title:req.body.title,
            files:bulkFile
        })
        await payload.save()
        return res.status(200).send(bulkFile)
    } catch (error) {
        return res.status(401).status(error.message)
    }
}
const multiple_File_View = async (req, res) => {
    try {
        const response = await model.find({})
        return res.status(200).json(response)
    } catch (error) {
        return res.status(401).send(error.message)
    }

}
module.exports = {
    multi_File_Upload,
    multiple_File_View
}