const clients = require('../models/client');
const clientRouter = require("express").Router();


clientRouter.post("/addClient",  (req, res) => {
    console.log(req.body) 
    const { firstName, lastName, phone, email, address, state, city, zipCode, gender, language, typeOfCase, status, marketingSource, legalRepresentative, date, nameContact, phoneContact, emailContact, notes, userCreated, scgheduleDate  } = req.body;

    let client = new clients();
    client.firstName = firstName;
    client.lastName = lastName;
    client.phone = phone;
    client.email = email;
    client.address = address;
    client.state = state;
    client.city = city;
    client.zipCode = zipCode;
    client.gender = gender;
    client.language = language;
    client.typeOfCase = typeOfCase;
    client.status = status;
    client.marketingSource = marketingSource;
    client.legalRepresentative = legalRepresentative;
    client.date = date;
    client.nameContact = nameContact;
    client.phoneContact = phoneContact;
    client.emailContact = emailContact;
    client.notes =  notes;
    client.userCreated = userCreated;
    client.scgheduleDate = scgheduleDate;

    async function saveClient() {
      try { 
        await client.save() 
        console.log(client) } catch (error) {
        res.status(500).send(error)
      }
    }
    saveClient(); 
    
    res.status(200).json({msg: "Registro exitoso"})
        
});

clientRouter.get("/allClients", async (req, res) => {
    const client = await clients.find();
    res.status(200).json(client)
})


clientRouter.delete("/deleteClient", async (req, res) => {
    console.log(req.query.idd)
    const client = await clients.deleteOne({_id: req.query.idd})
    res.status(200).json(client)
})





module.exports = clientRouter