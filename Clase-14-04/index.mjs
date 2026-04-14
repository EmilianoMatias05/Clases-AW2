//MODULO HTTP
import http from 'node:http'
import fsp from 'node:fs/promises'
import { writeFile } from 'node:fs'
import path from 'node:path'
//CREAMOS UNA INSTANCIA SERVIDOR

const server = http.createServer((peticion, respuesta) => {
    //console.log(peticion);
   // console.log(peticion.method);
if (peticion.method === 'GET') {
    if (peticion.url === '/') {
        respuesta.statusCode = 200
        //antes de end todo. desp nada  
        return respuesta.end(`
            Hola server
            Probando ando
            `)
    }
    if (peticion.url === '/usuarios') {
        respuesta.statusCode = 200
        return respuesta.end(`ruta usuarios /usuarios
            `)
    }
    if(peticion.method === 'POST'){
        if (peticion.url === '/') {

            const ruta = './contenido.txt'
            //estamos guardando contenido inventado solo para ver si funciona
            await fsp writeFile(ruta,'Contendido Fake')
            return respuesta.end(`Recurso Creado`)
        }
    }
    respuesta.statusCode = 404
    return respuesta.end('No se encontro')
    }
}

    
//callback funcion que pasa argumento de otra funcion se ejecuta en el cuerpo de la funcion madre

//ABRIMOS UN PUERTO
app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);

    respuesta.end(`
        Hola Servidor
        Probando`)
})
//usamos de 3000 para arriba
