import express from 'express'

const PUERTO = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const productos = [
    { id: 1, nombre: 'camiseta', precio: 35000 },
    { id: 2, nombre: 'panti', precio: 35001 }
]

const obtenerRaiz = (req, res) => {
    res.end('Estas en la raiz')
}

app.get('/', obtenerRaiz)

app.get('/usuarios', (req, res) => {
    const miObjeto = {
        materia: 'AW2'
    }
    res.json(miObjeto)
})

app.get('/productos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    
    const productosFiltrados = productos.filter((producto) => producto.id === id)
    
    if (productosFiltrados.length > 0) {
        return res.json(productosFiltrados)
    }
    
    res.json({ "mensaje": "Producto no encontrado" })
})

// Envio datos al servidor
app.post('/productos', (req, res) => {
    // Verificamos el cuerpo del mensaje
    const datosCliente = req.body;
    productos.push(datosCliente)
    res.status(201).json({mensaje: "Producto dado de alta"})
})

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})