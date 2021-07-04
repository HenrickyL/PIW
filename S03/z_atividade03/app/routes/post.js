import controller from '../controllers/post.js'
import auth from '../middleware/auth.js'

export default (app)=>{
    app.use('/api/posts',auth.check)
    app.get('/api/posts',controller.listarPosts);
    app.post('/api/posts',controller.inserePost);
    app.get('/api/posts/:id',controller.obterPost);
    app.delete('/api/posts/:id',controller.deletePost);
    app.get('/api/posts/:id/comentarios',controller.obterComentariosPost);




}