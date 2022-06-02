const express = require('express')
const mongoose = require('mongoose')
const singleFile = require('./routes/singleFileAPI')
const multiFile = require('./routes/multiFilesAPI')
const app = express()

const router = express.Router()

const PORT = process.env.PORT || 22000

app.use(express.json())

const db = () => {
    mongoose.connect('mongodb://localhost/fileUpload')
    console.log('DB CONNECTED')
}
db()

app.use('/api',multiFile)
app.use('/api',singleFile)

//port expose 
app.listen(22000, async () => {
    console.log('server listening on port : ', PORT)
})