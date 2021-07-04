const bodyParser = require('body-parser')
const express = require('express')
const routesAlunos = require('../app/routers/alunos')
const routesDisciplina = require('../app/routers/disciplinas')
const routesMatricula = require("../app/routers/matricula")
module.exports = ()=>{
    const app = express()
    app.set('port',3001)
    //configurando body-parser
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(express.static('./public'))
    //endpoints
    routesAlunos(app)
    routesDisciplina(app)
    routesMatricula(app)
    //othes
    app.all('/*',(req,res)=>{
        res.status(404).json({messenger:"não encontrado"})
    })
    return app
}