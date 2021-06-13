//express.js
    //carregar as rotas

import express from "express"
import bodyParser from 'body-parser'
//routes
import routesUsuario from "../app/routes/usuario.js"
import routesPost from "../app/routes/post.js"
import routesComentario from "../app/routes/comentario.js"


export default ()=>{
    const app = express();
    app.set("port",3001)
    app.use(bodyParser.json())
    app.use(express.static('./public'))
    
    //endpoints
    routesUsuario(app)
    routesPost(app)
    routesComentario(app)

    //outros
    app.all('/*',(req,res)=>{
        res.status(404).json({menssagem:"Rota não encontrada"})
    })

    return app
}