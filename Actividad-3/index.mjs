import { writeFile, readFile } from 'fs/promises'
import path from 'path'
import http from 'node:http'

const ruta = path.join(process.cwd(), 'usuarios.json')

/* FUNCIOMNES */
async function obtenerUsuariosAPI() {
    const response = await fetch('https://api.escuelajs.co/api/v1/users')
    return await response.json()
}

async function guardarUsuarios(usuarios) {
    await writeFile(ruta, JSON.stringify(usuarios, null, 4))
}

async function leerUsuarios() {
    const data = await readFile(ruta, 'utf-8')
    return JSON.parse(data)
}

function filtrarUsuarios(usuarios) {
    return usuarios.filter(u => u.id < 10)
}

/* ======== SERVER ============== */

const server = http.createServer(async (request, response) => {
    try {

        // Ruta principal
        if (request.method === 'GET' && request.url === '/usuarios') {

            const usuarios = await obtenerUsuariosAPI()
            await guardarUsuarios(usuarios)

            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(usuarios, null, 4))
        }

        // Ruta filtrada
        else if (request.method === 'GET' && request.url === '/usuarios/filtrados') {

            const usuarios = await leerUsuarios()
            const filtrados = filtrarUsuarios(usuarios)

            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(filtrados, null, 4))
        }

        // 404
        else {
            response.writeHead(404, { 'Content-Type': 'text/plain' })
            response.end('Recurso no encontrado')
        }

    } catch (error) {
        console.log(error)
        response.writeHead(500, { 'Content-Type': 'text/plain' })
        response.end('Error interno del servidor')
    }
})

server.listen(3000, () => {
    console.log('Servidor en puerto 3000')
})