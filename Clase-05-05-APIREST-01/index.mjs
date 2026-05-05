import express from 'express'
import { obtenerProductos, obtenerProductoID,eliminarID} from './funciones.mjs'

//import productos from './productos.mjs' //importamos bd del modulo productos.mjs
//simulacion base de datos


const PUERTO = 3000
const app = express()

//Defino Api REST

// GET /api/v1/productos -> ME TRAE TODOS

app.get('/api/v1/productos',obtenerProductos)


//cuando hay peticion no se ejecuta el obtPROD con ()
// GET /api/v1/productos -> ME TRAE X UNO X SU ID
app.get('/api/v1/productos/:id',obtenerProductoID)

// POST /api/v1/productos -> PARA DAR DE ALTA UN NUEVO PRODUCTO

// PUT /api/v1/productos -> MODIFICAR REGISTRO POR ID

// DELETE /api/v1/productos -> ELIMINAR 
app.delete('/api/v1/productos/:id',eliminarID)


app.listen(PUERTO)