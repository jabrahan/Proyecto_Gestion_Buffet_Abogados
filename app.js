require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const userRouter = require("./controllers/users");
const marketingRouter = require("./controllers/marketings");
const genderRouter = require("./controllers/genders");
const languageRouter = require("./controllers/languages");
const typeofcaseRouter = require("./controllers/typeofcases");
const statusRouter = require("./controllers/status");
const clientRouter = require("./controllers/clients");


//Config BD

async function conectBD() {
    try {
      await mongoose.connect(process.env.token);
      console.log("Database conected");
    } catch (error) {
      console.log("Error:" + error);
    }
  }
  
  conectBD();

//Routes Frontend
app.use(express.json());
app.use("/src", express.static(path.resolve("src")));
//app.use("/", express.static(path.resolve("views", "home")));
app.use("/", express.static(path.resolve("views", "login")));
app.use("/components", express.static(path.resolve("views", "components")));
app.use("/clients", express.static(path.resolve("views", "clients")));
app.use("/add-client", express.static(path.resolve("views", "add client")));
app.use("/settings", express.static(path.resolve("views", "settings")));
app.use("/dashboard", express.static(path.resolve("views", "dashboard")));
app.use("/my-account", express.static(path.resolve("views", "my account")));
app.use("/reports", express.static(path.resolve("views", "reports")));
app.use("/404", express.static(path.resolve("views", "404")));
app.use("/edit-lead", express.static(path.resolve("views", "edit Lead")));
app.get(`/edit-lead/:id`, (req, res) => {
     const id = req.params.id
     if (id) {
        res.sendFile(path.resolve("views", "edit Lead", "index.html"))
     } else {
        res.redirect("/404")
     }
})
app.use("/reports", express.static(path.resolve("views", "reports")));


//Routes Backend

app.use('/controllers', express.static(path.resolve("controllers")));
app.use('/api/users', userRouter)
app.use('/api/marketings', marketingRouter)
app.use('/api/genders', genderRouter)
app.use('/api/languages', languageRouter)
app.use('/api/typeofcases', typeofcaseRouter)
app.use('/api/status', statusRouter)
app.use('/api/clients', clientRouter)








module.exports = app