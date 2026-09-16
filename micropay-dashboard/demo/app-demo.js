async function cargarClientes(){

    try {

        const respuesta =
            await fetch("data/clientes.json");

        const datos =
            await respuesta.json();


        // Total clientes
        const totalClientes =
            document.getElementById("totalClientes");

        if(totalClientes){
            totalClientes.innerHTML = datos.length;
        }


        // Tabla clientes
        const tabla =
            document.getElementById("clientes");


        tabla.innerHTML = "";


        datos.forEach(cliente => {

            tabla.innerHTML += `
                <tr>
                    <td>${cliente.id}</td>
                    <td>${cliente.nombre}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.estado}</td>
                </tr>
            `;

        });


    } catch(error){

        document.getElementById("clientes").innerHTML =
        `
        <tr>
            <td colspan="4">
                Error al cargar clientes
            </td>
        </tr>
        `;

        console.error(error);

    }

}



async function cargarTransacciones(){

    try {

        const respuesta =
            await fetch("data/transacciones.json");


        const datos =
            await respuesta.json();


        // Total transacciones
        const totalTransacciones =
            document.getElementById("totalTransacciones");


        if(totalTransacciones){
            totalTransacciones.innerHTML = datos.length;
        }


        // Tabla transacciones
        const tabla =
            document.getElementById("transacciones");


        tabla.innerHTML = "";


        datos.forEach(tx => {

            tabla.innerHTML += `
                <tr>
                    <td>${tx.id}</td>
                    <td>${tx.cliente}</td>
                    <td>$${tx.monto}</td>
                    <td>${tx.estado}</td>
                </tr>
            `;

        });


    } catch(error){

        document.getElementById("transacciones").innerHTML =
        `
        <tr>
            <td colspan="4">
                Error al cargar transacciones
            </td>
        </tr>
        `;

        console.error(error);

    }

}



// Ejecutar carga inicial

cargarClientes();

cargarTransacciones();