const bodyParser = require('body-parser')
const express = require('express')
const routesAlunos = require('../app/routers/alunos')
module.exports = ()=>{
    const app = express()
    app.set('port',3001)
    //configurando body-parser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(express.static('./public'))
    //endpoints
    routesAlunos(app)
    //othes
    app.all('/*',(req,res)=>{
        res.status(404).json({messenger:"não encontrado"})
    })
    return app
}