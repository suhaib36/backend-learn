const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    title: String,
    description: String
})

//creating a model  to perform CRUD 

const noteModel = mongoose.model("note", noteSchema)


module.exports = noteModel