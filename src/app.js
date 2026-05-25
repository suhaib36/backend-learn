const express = require("express")
const noteModel = require("./models/node.model")

const app = express();
app.use(express.json());


// POST NOTE
app.post("/notes", async (req, res) => {
    const data = req.body
    await noteModel.create({title:data.title, description: data.description})

    res.status(201).json({
        message: "note created"
    })

})

// GET NOTE 

app.get("/notes", async (req, res)=>{

    const notes = await noteModel.find()
    res.status(200 ).json({message:"note fetched", notes:notes})
})

// delete method

app.delete("/notes/:id", async (req, res)=>{
    const id = req.params.id
    
    await noteModel.findOneAndDelete({_id:id})

    res.status(200).json({message:"note deleted"})
})

// patch method 

app.patch("/notes/:id", async (req, res)=>{
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id:id}, {description:description})

    res.status(200).json({message:"note updated"})
})
module.exports = app