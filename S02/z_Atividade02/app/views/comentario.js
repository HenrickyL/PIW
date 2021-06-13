import userView from './usuario.js'
import postView from './post.js'


export default {
    render: (coment)=>{
        return {
            id: coment._id,
            post: postView.render(coment.id_post),
            usuario: userView.render(coment.id_usuario)
        }
    }
}