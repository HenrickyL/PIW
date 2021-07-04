import controller from '../controllers/usuario.js'
import auth from '../middleware/auth.js'

export default (app)=>{
    app.post('/api/usuarios/login',auth.logar)
    app.post("/api/usuarios",controller.inserirUsuario)
    app.use('/api/usuarios',auth.check)
    app.get("/api/usuarios",controller.listarUsuarios)
    app.get("/api/usuarios/:id",controller.obterUsuario)
    app.delete("/api/usuarios/:id",controller.removerUsuario)
    app.get("/api/usuarios/:id/posts",controller.obterPostsUsuario)




}