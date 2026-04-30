import express from 'express'

const PUERTO = 3000
const API_URL = 'http://localhost:4321/usuario'

const app = express()

async function middlewear(req, res, next) {
    try {
        const codigoParametro = Number(req.params.codigo)

        const respuesta = await fetch(API_URL)
        const usuario = await respuesta.json()

        if (codigoParametro === usuario.codigo) {
            next()
        } else {
            res.status(400).json({ mensaje: 'El código es incorrecto' })
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al conectar con la API' })
    }
}

app.get('/usuario/:codigo', middlewear, (req, res) => {
    res.status(200).json({ mensaje: 'El código es correcto' })
})

app.listen(PUERTO, () => {
    console.log(`Servidor proyecto corriendo en http://localhost:${PUERTO}`)
})