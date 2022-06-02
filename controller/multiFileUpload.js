const {model} = require('../models/multiFileModel')
const fileFormatHelper = require('../helpers/fileFormatHelper')


/******************************************************
* Multiple File Upload controller 
@returns {ArrayOfObject} // [{}]
*******************************************************/

const multi_File_Upload = async (req, res) => {
    try {
        let bulkFile = []
        req.files.forEach(files=> {
            const payload = {
                fileName: files.originalname,
                fileType: files.mimetype,
                fileSize: fileFormatHelper.fileformat(files.size, 2)
            }
            bulkFile.push(payload)
        });
        const payload = new model({
            title: "multiple files",
            file: bulkFile
        })
        await new model(payload).save()
        console.log('multiple file : ', payload)
        return res.status(200).send(payload)
    } catch (error) {
        console.log(error.message)
        return res.status(401).status(error.message)
    }
}
const multiple_File_View = async (req, res) => {
    try {
        const response = await model.find({})
        return res.status(200).json(response)
    } catch (error) {
        console.log("error : ", error.message)
        return res.status(401).send(error.message)
    }

}
module.exports = {
    multi_File_Upload,
    multiple_File_View
}