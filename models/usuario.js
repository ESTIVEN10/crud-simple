const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  edad: Number
});

module.exports = mongoose.model("Usuario", usuarioSchema);
