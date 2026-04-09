import { obtenerUsuarios } from './modules/api.mjs';
import { guardarUsuarios, leerUsuarios } from './modules/file.mjs';

async function main() {
    try {
        // 1. Obtener datos
        const usuarios = await obtenerUsuarios();

        // 2. Guardar
        await guardarUsuarios(usuarios);

        // 3. Leer
        const usuariosLeidos = await leerUsuarios();

        // 4. Mostrar
        console.log(usuariosLeidos);

    } catch (error) {
        console.error("Error en main:", error);
    }
}

main();