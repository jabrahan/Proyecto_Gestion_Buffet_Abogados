const User = require("../models/user");
const userRouter = require("express").Router();
const { default: mongoose } = require('mongoose');

userRouter.get("/", async (req, res) => {
   const user = await User.findOne({email: req.query.email})
   //console.log(user)
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(201).sendStatus(201)
    }
});

userRouter.get("/allUsers", async (req, res) => {
    const user = await User.find()
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(201).sendStatus(201)
    }
});

userRouter.post("/addUser",  (req, res) => {
    const { userName, userLastName, userEmail, userPhone, userStatus, userRole, userDirection, userPassword } = req.body;

    //console.log(req.body)

    let user = new User();
    user.name = userName;
    user.lastName = userLastName; 
    user.email = userEmail;
    user.phone = userPhone;
    user.status = userStatus;
    user.role = userRole;
    user.direction = userDirection;
    user.password = userPassword;


    async function saveUser() {
      try { 
        await user.save()
        console.log(user)
      }   catch (error) {
        res.status(500).send(error)
      }
    }
    saveUser(); 
    
    res.status(200).json({msg: "Registro exitoso"})
    
});

userRouter.delete("/deleteUser", async (req, res) => {
    console.log(req.query.email)
    const user = await User.deleteOne({email: req.query.email})
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(201).sendStatus(201)
    }
});



userRouter.put("/updateOneUser", async (req, res) => {
    console.log(req.body)
    const { userName, userLastName, userEmail, userPhone, userStatus, userRole, userDirection, userPassword, id } = req.body;
    const user = await User.updateOne({_id: id}, {$set: {name: userName, lastName: userLastName, email: userEmail, phone: userPhone, status: userStatus, role: userRole, direction: userDirection, password: userPassword}})
    console.log(user)
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(201).sendStatus(201)
    }
});

userRouter.get("/getUser", async (req, res) => {
    const idt = req.query.idd
    console.log(idt)
    if(mongoose.Types.ObjectId.isValid(idt)) {
    const user = await User.findOne({_id: idt})
    res.status(200).json(user) } 
    else {
        res.status(201).sendStatus(201)
    }
});

module.exports = userRouter