import { writeFile, readFile } from 'fs/promises';
import path from 'path';

const rutaJSON = path.resolve('usuarios.json');

export async function guardarUsuarios(usuarios) {
    try {
        await writeFile(rutaJSON, JSON.stringify(usuarios, null, 2));
    } catch (error) {
        console.error("Error al guardar:", error);
    }
}

export async function leerUsuarios() {
    try {
        const contenido = await readFile(rutaJSON, 'utf-8');
        return JSON.parse(contenido);
    } catch (error) {
        console.error("Error al leer:", error);
    }
}