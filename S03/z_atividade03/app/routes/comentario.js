import controller from '../controllers/comentario.js'
import auth from '../middleware/auth.js'

export default (app)=>{
    app.use('/api/comentarios',auth.check)
    app.get('/api/comentarios',controller.listaComentarios)   
    app.post('/api/comentarios',controller.inserirComentario)    
    app.get('/api/comentarios/:id',controller.obterComentario) 
    app.delete('/api/comentarios/:id',controller.deleteComentario)   



}