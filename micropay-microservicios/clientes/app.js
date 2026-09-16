require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;;

const clientes = [
    {
        id: 1,
        nombre: "Ana Torres",
        email: "ana@micropay.cl",
        estado: "Activo"
    },
    {
        id: 2,
        nombre: "Carlos Soto",
        email: "carlos@micropay.cl",
        estado: "Activo"
    },
    {
        id: 3,
        nombre: "Camila Rojas",
        email: "camila@micropay.cl",
        estado: "Activo"
    }
];

app.get("/clientes", (req, res) => {
    res.json(clientes);
});

app.listen(PORT, () => {
    console.log(`Microservicio Clientes ejecutándose en puerto ${PORT}, http://localhost:${PORT}/clientes `);
});