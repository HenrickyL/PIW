import schema from '../models/comentario.js'
import view from '../views/comentario.js'
import schemaUser from '../models/usuario.js'
import jwt from 'jsonwebtoken'
let comentSchema = schema


export default {
    listaComentarios: async (req,res)=>{
        try{
            let comentarios = await comentSchema.find()
            //comentarios = comentarios.map(e=>view.render(e))
            return res.status(200).json(comentarios)
        }catch(e){
            return res.status(500).json({mensagem:e})
        }
    },
    inserirComentario:async (req,res)=>{
        let token = req.headers.token
        let payload = jwt.decode(token)
        let idUsuarioLogado = payload.id
	let currentUser = "username"
	try{
	//buscar o nome
	let user = await schemaUser.findById(idUsuarioLogado)
	if(user)
		currentUser = user.nome

        let corpo = {
            id_usuario: idUsuarioLogado,
            texto: req.body.texto,
            id_post: req.body.id_post,
            likes: req.body.likes,
            username: currentUser
        }
        
        
            let comentario = await comentSchema.create(corpo)
            comentario = view.render(comentario)
            return res.status(201).json(comentario)
            
        }catch(e){
            return res.status(400).json({mensagem:e})
            
        }
    },
    obterComentario: async (req,res)=>{
        let id = req.params.id
        try{
            let comentario = await comentSchema.findById(id)
                                    .populate('usuarios')
                                    .populate('posts')
            comentario = view.render(comentario)
            return res.status(200).json(comentario)
        }catch(e){
            return res.status(404).json({mensagem:e})

        }
    },
    deleteComentario: async (req,res)=>{
        let idComent = req.params.id
        let token = req.headers.token
        let payload = jwt.decode(token)
        let idUsuarioLogado = payload.id

        try{
            //verificar se o comment pertence
            let commentList = await comentSchema.findOne({_id:idComent,id_usuario:idUsuarioLogado})
            if(commentList){
                let comentario = await comentSchema.findByIdAndRemove(idComent)
                comentario = view.render(comentario)
                return res.status(200).json(comentario)
            }else{
                return res.status(401).send("Impossivel deletar o coment??rio!")
            }
        }catch(e){
            return res.status(404).json({mensagem:e})

        }
    }
}
