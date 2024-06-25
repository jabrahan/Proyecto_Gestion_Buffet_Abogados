const Language = require("../models/language");
const languageRouter = require("express").Router();

languageRouter.get("/", async (req, res) => {
    const language = await Language.findOne({name: req.query.name})
    //console.log(language)
     if (language) {
          res.status(200).json(language)
     } else {
          res.status(201).sendStatus(201)
     }
});

languageRouter.get("/allLanguages", async (req, res) => {
    const language = await Language.find()
     if (language) {
          res.status(200).json(language)
     } else {
          res.status(201).sendStatus(201)
     }
});

languageRouter.post("/addLanguage",  (req, res) => {
    console.log(req.body)
    const { name, date } = req.body;    

    let language = new Language();
    language.name = name;
    language.date = date;

    async function saveLanguage() {
      try { 
        await language.save() 
        console.log(language) } catch (error) {
        res.status(500).send(error)
      }
    }
    saveLanguage(); 
    
    res.status(200).json({msg: "Registro exitoso"})
        
});

languageRouter.delete("/deleteLanguage", async (req, res) => {
    const language = await Language.deleteOne({_id: req.query.id})
    if (language) {
        res.status(200).json(language)
    } else {
        res.status(201).sendStatus(201)
    }
});

languageRouter.put("/updateLanguage", async (req, res) => {
    console.log(req.body)
    const {_id, name, date } = req.body;
    const language = await Language.updateOne({_id: _id}, {$set: {name: name, date: date}})
    console.log(language)
    if (language) {
        res.status(200).json(language)
    } else {
        res.status(201).sendStatus(201)
    }
});


module.exports = languageRouter