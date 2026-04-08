import fsp from 'node:fs/promises'
import path from 'node:path'

try{
    const ruta = path.join('./texto.txt')
    //Escribimos archivo
    fsp.writeFile('./texto.txt','Hola Nuevo contenido')
}catch(e){
    console.log(e)
}