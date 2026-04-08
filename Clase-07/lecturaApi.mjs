//https://mockapi.io/projects/69cbcd110b417a19e07b47db
import fsp from 'node:fs/promises'
import path from 'node:path'

try{
    //leemos la api via fetch y devuelve un objeto response
    const respuesta = await fetch('https://69cbcd110b417a19e07b47da.mockapi.io/api/v1/productos/productos')
    //fetch pide consultas a la web
    //Extraer el cuerpo en formato JSON y convertilo a un arreglo/objeto
    const productos = await respuesta.json()
    const ruta = path.join('./datosApi.json')
    //Convertimos un Obj JS - Arrego u Objeto a un JSON
    const datosAguardar = JSON.stringify(productos, null, 4)
    //escribimos archivo
    await fsp.writeFile(ruta, datosAguardar)
}catch(e){
    console.log(e)
}