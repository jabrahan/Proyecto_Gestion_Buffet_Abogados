const status = require("../models/statu");
const statusRouter = require("express").Router();

statusRouter.get("/", async (req, res) => {
    const statutes = await status.findOne({name: req.query.name})
    //console.log(status)
     if (statutes) {
          res.status(200).json(statutes)
     } else {
          res.status(201).sendStatus(201)
     }
});

statusRouter.get("/allStatus/", async (req, res) => {
    const statutes = await status.find()
     if (statutes) {
          res.status(200).json(statutes)
     } else {
          res.status(201).sendStatus(201)
     }
});

statusRouter.post("/addStatus/",  (req, res) => {
    const { name, date } = req.body;

    let statutes = new status();
    statutes.name = name;
    statutes.date = date; 

    async function saveStatus() {
      try { 
        await statutes.save() 
        console.log(statutes) } catch (error) {
        res.status(500).send(error)
      }
    }
    saveStatus(); 
    
    res.status(200).json({msg: "Registro exitoso"})
        
});

statusRouter.delete("/deleteStatus/", async (req, res) => {
    const statutes = await status.deleteOne({_id: req.query.id})  
    if (statutes) {
        res.status(200).json(statutes)
    } else {
        res.status(201).sendStatus(201)
    }
});

statusRouter.put("/updateStatus/", async (req, res) => {
    const {_id, name, date } = req.body;
    const statutes = await status.updateOne({_id: _id}, {$set: {name: name, date: date}})
    console.log(statutes)
    if (statutes) {
        res.status(200).json(statutes)
    } else {
        res.status(201).sendStatus(201)
    }
});

module.exports = statusRouter