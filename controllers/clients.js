const { default: mongoose } = require('mongoose');
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

clientRouter.get("/getClient", async (req, res) => {
    const idt = req.query.idd
    console.log(idt)
    if(mongoose.Types.ObjectId.isValid(idt)) {
    const client = await clients.findOne({_id: idt})
    res.status(200).json(client) } 
    else {
        res.status(404).json({msg: "Error"})
    }
})

clientRouter.put("/updateOneClient", async (req, res) => {
    console.log(req.body) 
    const { firstName, lastName, phone, email, address, state, city, zipCode, gender, language, typeOfCase, status, marketingSource, legalRepresentative, date, nameContact, phoneContact, emailContact, notes, userCreated, scgheduleDate, id  } = req.body;

    const lead = await clients.updateOne({_id: id}, {$set: {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        address: address,
        state: state,
        city: city,
        zipCode: zipCode,
        gender: gender,
        language: language,
        typeOfCase: typeOfCase,
        status: status,
        marketingSource: marketingSource,
        legalRepresentative: legalRepresentative,
        date: date,
        nameContact: nameContact,
        phoneContact: phoneContact,
        emailContact: emailContact,
        notes:  notes,
        userCreated: userCreated,
        scgheduleDate: scgheduleDate
    }})
    console.log(lead)
    if (lead) {
        res.status(200).json(lead)
    } else {
        res.status(201).sendStatus(201)
    }
  
  })


module.exports = clientRouter