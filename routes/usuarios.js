// routes/usuarios.js
const express = require("express");
const router = express.Router();
const Usuario = require("../models/usuario");

//////////////////////////////////////////////////////////
// 🚀 ENDPOINTS CRUD
//////////////////////////////////////////////////////////

// ✅ GET → obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener usuarios", error });
  }
});

// ✅ POST → crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.json({ mensaje: "✅ Usuario creado correctamente", usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ mensaje: "❌ Error al crear usuario", error });
  }
});

// ✅ PUT → actualizar un usuario por ID
router.put("/:id", async (req, res) => {
  try {
    const usuarioActualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ mensaje: "✅ Usuario actualizado correctamente", usuario: usuarioActualizado });
  } catch (error) {
    res.status(500).json({ mensaje: "❌ Error al actualizar usuario", error });
  }
});

// ✅ DELETE → eliminar un usuario por ID
router.delete("/:id", async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "🗑️ Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "❌ Error al eliminar usuario", error });
  }
});

//////////////////////////////////////////////////////////
// Exportamos las rutas
//////////////////////////////////////////////////////////
// ✅ GET → contar el total de usuarios en la base de datos
router.get("/count", async (req, res) => {
  try {
    const total = await Usuario.countDocuments();
    res.json({ totalUsuarios: total });
  } catch (error) {
    res.status(500).json({ mensaje: "❌ Error al contar usuarios", error });
  }
});

module.exports = router;
