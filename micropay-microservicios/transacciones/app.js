require("dotenv").config();

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3002;

const transacciones = [
    {
        id: "TX-1001",
        cliente: "Ana Torres",
        monto: 25000,
        estado: "Aprobada"
    },
    {
        id: "TX-1002",
        cliente: "Carlos Soto",
        monto: 12500,
        estado: "Pendiente"
    },
    {
        id: "TX-1003",
        cliente: "Camila Rojas",
        monto: 48000,
        estado: "Aprobada"
    }
];

app.get("/transacciones", (req, res) => {
    res.json(transacciones);
});

app.listen(PORT, () => {
    console.log(`Microservicio Transacciones ejecutándose en puerto ${PORT}, http://localhost:${PORT}/transacciones`);
});
