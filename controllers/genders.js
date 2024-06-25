const Gender = require("../models/gender");
const genderRouter = require("express").Router();

genderRouter.get("/", async (req, res) => {
    const gender = await Gender.findOne({name: req.query.name})
    //console.log(gender)
     if (gender) {
          res.status(200).json(gender)
     } else {
          res.status(201).sendStatus(201)
     }
});

genderRouter.get("/allGenders", async (req, res) => {
    const gender = await Gender.find()
     if (gender) {
          res.status(200).json(gender)
     } else {
          res.status(201).sendStatus(201)
     }
});

genderRouter.post("/addGender",  (req, res) => {
    console.log(req.body)
    const { name, date } = req.body;

    let gender = new Gender();
    gender.name = name;
    gender.date = date;

    async function saveGender() {
      try { 
        await gender.save() 
        console.log(gender) } catch (error) {
        res.status(500).send(error)
      }
    }
    saveGender(); 
    
    res.status(200).json({msg: "Registro exitoso"})
        
});


genderRouter.delete("/deleteGender", async (req, res) => {
    const gender = await Gender.deleteOne({_id: req.query.id})
    if (gender) {
        res.status(200).json(gender)
    } else {
        res.status(201).sendStatus(201)
    }
});


genderRouter.put("/updateGender", async (req, res) => {
    console.log(req.body)
    const {_id, name, date } = req.body;
    const gender = await Gender.updateOne({_id: _id}, {$set: {name: name, date: date}})
    console.log(gender)
    if (gender) {
        res.status(200).json(gender)
    } else {
        res.status(201).sendStatus(201)
    }
})


module.exports = genderRouter