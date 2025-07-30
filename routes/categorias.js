const express = require("express");
const router = express.Router();

//listar categoria
router.get("/", async (req, res) => {
    res.render ("base", {
        title: "Listar Categorias",
        view: "Categorias/show"
    });
});

//edit categoria
router.get("/edit", async (req, res) => {
    res.render ("base", {
        title: "Editar Categorias",
        view: "Categorias/edit"
    });
});

//add categoria
router.get("/add", async (req, res) => {
    res.render ("base", {
        title: "Add Categorias",
        view: "Categorias/add"
    });
});