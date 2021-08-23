import userView from './usuario.js'
import postView from './post.js'


export default {
    render: (coment)=>{
        return  {
                    id: coment._id,
                    texto: coment.texto,
                    post: coment.id_post,
                    usuario: coment.id_usuario,
                    likes:coment.likes,
                    username: coment.username
                }
    }
}
