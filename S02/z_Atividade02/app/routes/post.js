import controller from '../controllers/post.js'

export default (app)=>{
    app.get('/api/posts',controller.listarPosts);
    app.post('/api/posts',controller.inserePost);
    app.get('/api/posts/:id',controller.obterPost);
    app.delete('/api/posts/:id',controller.deletePost);



}