const Marketing = require("../models/marketingSource");
const marketingRouter = require("express").Router();

marketingRouter.post("/addMarketing",  (req, res) => {
    console.log(req.body) 
    const { marketingSou, date } = req.body;

    let marketing = new Marketing();
    marketing.name = marketingSou;
    marketing.date = date;

    async function saveMarketing() {
      try { 
        await marketing.save() 
        console.log(marketing) } catch (error) {
        res.status(500).send(error)
      }
    }
    saveMarketing(); 
    
    res.status(200).json({msg: "Registro exitoso"})
        
});

marketingRouter.get("/", async (req, res) => {
    console.log(req.body)
   const marketing = await Marketing.findOne({name: req.query.name})
   //console.log(marketing)
    if (marketing) {
        res.status(200).json(marketing)
    } else {
        res.status(201).sendStatus(201)
    }
});

marketingRouter.get("/allMarketing", async (req, res) => {
    const marketing = await Marketing.find()
    if (marketing) {
        res.status(200).json(marketing)
    } else {
        res.status(201).sendStatus(201)
    }
}); 

marketingRouter.delete("/deleteMarketing", async (req, res) => {
    const marketing = await Marketing.deleteOne({_id: req.query.id})
    if (marketing) {
        res.status(200).json(marketing)
    } else {
        res.status(201).sendStatus(201)
    }
});

marketingRouter.put("/updateMarketing", async (req, res) => {
    console.log(req.body)
    const {_id, name, date } = req.body;
    const marketing = await Marketing.updateOne({_id: _id}, {$set: {name: name, date: date}})
    console.log(marketing)
    if (marketing) {
        res.status(200).json(marketing)
    } else {
        res.status(201).sendStatus(201)
    }
});

module.exports = marketingRouter


