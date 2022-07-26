const express = require("express");
const router = express.Router();

const {postModel} = require("../model/dbPost");
const ObjectID = require("mongoose").Types.ObjectId;

router.get('/', (req, res) => {
    postModel.find((err, docs) => {
       res.send(docs);
    })
})

router.post('/', (req, res) => {
    const newRecord = new postModel({
        author: req.body.author,
        number: req.body.number
    });

    newRecord.save((err, docs) =>{
        if(!err) res.send(docs);    })
})

router.put("/:id", (req, res) => {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send("unknown id" +req.params.id)

    const values = {
        author: req.body.author,
        number: req.body.number
    };
    postModel.findByIdAndUpdate(req.params.id,{$set: values}, {new: true}, (err, docs) => {
        if(!err) res.send(docs);
        else console.log("Update error");

    }
    )
})

router.delete('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id) )
    return res.status(400).send("Error unknow ID " + req.params.id);

    postModel.findByIdAndRemove(req.params.id, (err, docs) => 
    {
        if(!err) res.send(docs);
        else console.log("Delete error");
    }
    );

    
})

module.exports= router;