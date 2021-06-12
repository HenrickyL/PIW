const express = require('express')
module.exports = function(){
    const app = express()
    app.use(express.static('./public'))
    app.set('port',3001)
    //endpoints
    app.get('/alunos',(req,res)=>{

    })


    return app
}