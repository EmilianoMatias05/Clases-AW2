function middlewear1(req,res,next){
    const usuarioExiste =true
    if(usuarioExiste){
        console.log('El Usuario SI existe...');
        next() //---> avanzo

    }else{
        res.send('Usuario NO registrado...')
    }


    next() //----------------> hago que avance al siguiente
}