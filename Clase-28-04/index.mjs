import express from 'express'
import path from 'node:path'
const Puerto = 3000

const app = express()


app.use(express.static(/*utilizar modulo path*/path.resolve('front')))

app.listen(Puerto,()=>{
    console.log(`http://localhost:${Puerto}`);
    
})