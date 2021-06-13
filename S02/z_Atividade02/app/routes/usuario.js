import controller from '../controllers/usuario.js'


export default (app)=>{
    app.get("/api/usuarios",controller.listarUsuarios)
    app.post("/api/usuarios",controller.inserirUsuario)
    app.get("/api/usuarios/:id",controller.obterUsuario)
    app.delete("/api/usuarios/:id",controller.removerUsuario)
    app.get("/api/usuarios/:id/posts",controller.obterPostsUsuario)




}