const express = require("express");

const app = express();

const PORT = 8080;

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static("."));

app.listen(PORT, () => {
    console.log(`Dashboard ejecutándose en http://localhost:${PORT}`);
});