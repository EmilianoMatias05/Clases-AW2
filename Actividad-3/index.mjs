import {writeFile,readFile} from  'fs/promises';
import path, { join } from 'path';
import http from 'node:http';

const ruta = path.join('./usuarios.json')

const server = http.createServer(async(request,response)=>{
    try {
        if(request.method == 'GET' && request.url === '/usuarios'){
            const apiResponse = await fetch ('https://api.escuelajs.co/api/v1/users')
            const usuarios = await apiResponse.json()

            await writeFile(ruta,JSON.stringify(usuarios,null,4))

            const data = await readFile(ruta,'utf-8')
            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.end(data)

        } else {
            response.writeHead(404)
            response.end('Recurso no encontrado')
        }

    } catch (error) {
        throw new error(e)
        console.log(error)
        response.writeHead(500)
        response.end('Error')
    }
})

server.listen(3000, () => {
    console.log('Servidor en puerto 3000')
})