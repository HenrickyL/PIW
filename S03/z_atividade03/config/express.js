//express.js
    //carregar as rotas

import express from "express"

//routes
import routesUsuario from "../app/routes/usuario.js"
import routesPost from "../app/routes/post.js"
import routesComentario from "../app/routes/comentario.js"
import cors from 'cors'

export default ()=>{
    const app = express();
    app.set("port",3002)
    app.use(express.static('./public'))
    app.use(cors())
    app.use(express.urlencoded({ extended : true }))
    app.use(express.json())
    
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
