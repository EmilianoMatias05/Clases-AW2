import productos from "./productos.mjs"

export function obtenerProductos(req,res) {
    res.json(productos)
}

export function obtenerProductoID(req, res) {
    const id_producto = req.params.id;

    //fileter
    const productosFiltrados = productos.filter((producto) => {
        return producto.id === id_producto;
    });


    if (productosFiltrados.length > 0) {
        
        // Armaste este objeto
        const respuesta = {
            datos: productosFiltrados,
            url: 'http://localhost:3000/api/v1/productos/' + id_producto, 
            status: 200
        };
        
       
        res.json(respuesta);
        
    } else {
        res.status(404).json({
            mensaje: 'Producto no encontrado'
        });
    }
}
export function eliminarID(req, res) {
    const id_producto = req.params.id;

    const productosFiltrados = productos.filter((producto) => {
        return (producto.id) != id_producto;
    });
    productos = productosFiltrados
   
        const respuesta = {
            mensaje: 'Producto Eliminado...',
            datos: productosFiltrados,
            url: 'http://localhost:3000/api/v1/productos/' + id_producto, 
            status: 200,
            verbo :'DELETE '
        };
    
        res.json(respuesta);

}