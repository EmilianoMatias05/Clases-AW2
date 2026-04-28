import express from 'express'

const Puerto = 3000

const app = express()

//middlewares--

function middlewear1(req,res,next){
    console.log('middlewear1');
    
    next()
}

// use = antes del parametro hay uno oculto, es decir hay un '/', prefijo
app.use('/',middlewear1)

//---------------------------------------------------> izq der
app.get('/',(req,res)=>{
    res.send('hola')
    console.log('Verificacion...');
    
})
app.get('/saludo',(req,res)=>{
    res.send('Respuesta final')
    console.log('Saludo echo');
    
})
app.listen(Puerto,()=>{
    console.log(`http://localhost:${Puerto}`);
    
})