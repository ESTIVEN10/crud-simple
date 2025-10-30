// app.js
const express = require("express");
const mongoose = require("mongoose");
const usuariosRoutes = require("./routes/usuarios"); // 👈 Importamos las rutas

const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Conexión a MongoDB
mongoose
  .connect("mongodb://localhost:27017/usuariosDB")
  .then(() => console.log("✅ Conectado a MongoDB en localhost:27017"))
  .catch((error) => console.error("❌ Error al conectar a MongoDB:", error));

// 👇 Usamos las rutas externas (todas comenzarán con /usuarios)
app.use("/usuarios", usuariosRoutes);

// 🚀 Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
