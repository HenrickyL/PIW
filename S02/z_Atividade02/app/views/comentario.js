import userView from './usuario.js'
import postView from './post.js'


export default {
    render: (coment)=>{
        console.log()
        return  {
                    id: coment._id,
                    texto: coment.texto,
                    post: coment.id_post,//postView.render(coment.id_post),
                    usuario: coment.id_usuario//userView.render(coment.id_usuario)
                }
    }
}