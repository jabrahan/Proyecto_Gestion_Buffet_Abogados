const mongoose = require("mongoose");
const userRouter = require("../controllers/users");


const user = new mongoose.Schema({
  name: String,
  lastName: String,
  password: String,
  email: String,
  phone: String,
  status: String,
  role: String,
  direction: String
});

//Configurar la respuesta del modelo

user.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
  }
})


//registrar el modelo

const users = mongoose.model("User", user);

//exportar

module.exports = users;
