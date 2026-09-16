const API_URL = CONFIG.API_URL;


async function cargarClientes(){

    try {

        const respuesta =
            await fetch(`${API_URL}/clientes`);
        const datos =
            await respuesta.json();
        // Actualizar contador de clientes
        document.getElementById("totalClientes").innerHTML =
            datos.length;
        const tabla =
            document.getElementById("clientes");
        tabla.innerHTML = "";

        datos.forEach(cliente => {
            tabla.innerHTML += `
                <tr>
                    <td>${cliente.id}</td>
                    <td>${JSON.stringify(cliente)}</td>
                </tr>
            `;
        });

    } catch(error) {
        document.getElementById("clientes").innerHTML =
        `
        <tr>
            <td colspan="2">
            Error al conectar con API
            </td>
        </tr>
        `;
        console.error("Error clientes:", error);
    }
}
async function cargarTransacciones(){

    try {
        const respuesta =
            await fetch(`${API_URL}/transacciones`);
        const datos =
            await respuesta.json();
        // Actualizar contador de transacciones
        document.getElementById("totalTransacciones").innerHTML =
            datos.length;

        const tabla =
            document.getElementById("transacciones");

        tabla.innerHTML = "";
        datos.forEach(tx => {

            tabla.innerHTML += `
                <tr>
                    <td>${tx.id}</td>
                    <td>${JSON.stringify(tx)}</td>
                </tr>
            `;
        });
    } catch(error) {
        document.getElementById("transacciones").innerHTML =
        `
        <tr>
            <td colspan="2">
            Error al conectar con API
            </td>
        </tr>
        `;
        console.error("Error transacciones:", error);
    }

}


cargarClientes();

cargarTransacciones();