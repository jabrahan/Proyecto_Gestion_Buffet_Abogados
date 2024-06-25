const typeOfCase = require("../models/typeofcase");
const typeOfCaseRouter = require("express").Router();

typeOfCaseRouter.get("/", async (req, res) => {
    const typeofcase = await typeOfCase.findOne({name: req.query.name})
    //console.log(typeOfCase)
     if (typeofcase) {
          res.status(200).json(typeofcase)
     } else {
          res.status(201).sendStatus(201)
     }
});

typeOfCaseRouter.get("/allTypeOfCases", async (req, res) => {
    const typeofcase = await typeOfCase.find()
     if (typeofcase) {
          res.status(200).json(typeofcase)
     } else {
          res.status(201).sendStatus(201)
     }
});

typeOfCaseRouter.post("/addTypeOfCase",  (req, res) => {
    console.log(req.body)
    const { name, date } = req.body;

    let typeofcase = new typeOfCase();
    typeofcase.name = name;
    typeofcase.date = date;

    async function saveTypeOfCase() {
      try { 
        await typeofcase.save() 
        console.log(typeofcase) } catch (error) {
        res.status(500).send(error)
      }
    }
    saveTypeOfCase(); 
    
    res.status(200).json({msg: "Registro exitoso"})
        
});

typeOfCaseRouter.delete("/deleteTypeOfCase", async (req, res) => {
    const typeofcase = await typeOfCase.deleteOne({_id: req.query.id})
    if (typeofcase) {
        res.status(200).json(typeofcase)
    } else {
        res.status(201).sendStatus(201)
    }
});

typeOfCaseRouter.put("/updateTypeOfCase", async (req, res) => {
    console.log(req.body)
    const {_id, name, date } = req.body;
    const typeofcase = await typeOfCase.updateOne({_id: _id}, {$set: {name: name, date: date}})
    console.log(typeofcase)
    if (typeofcase) {
        res.status(200).json(typeofcase)
    } else {
        res.status(201).sendStatus(201)
    }
});


module.exports = typeOfCaseRouter