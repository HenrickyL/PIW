import viewUser from './usuario.js' 

export default {
    render: (post)=>{
        return {
            id: post._id,
            texto: post.texto,
            likes: post.likes,
            usuario: viewUser.render(post.id_usuario)
        }
    }
}