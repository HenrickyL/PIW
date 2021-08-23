import schema from '../models/post.js'
import schemaComent from '../models/comentario.js'
import schemaUser from '../models/usuario.js'
import jwt from 'jsonwebtoken'
import view from '../views/post.js'
import viewComment from '../views/comentario.js'


const postsSchema = schema
const comentSchema =schemaComent


export default {
    listarPosts: async (req,res)=>{
        try{
            let posts = await postsSchema.find().populate('Usuario');
            posts = posts.map(p=>view.render(p))
            return res.status(200).json(posts)
        }catch(e){
            return res.status(500).json({mensagem:e})
        }
    },
    inserePost: async (req,res) =>{
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
	    likes: req.body.likes,
	    texto: req.body.texto,
	    username: currentUser
	}
	
	let post = await postsSchema.create(corpo)
	return res.status(201).json(view.render(post))        
        
        ///////////////
        }catch(e){
            return res.status(400).json({mensagem:e})
            
        }
    },
    obterPost: async (req,res)=>{
        let id = req.params.id
        try{
            let post = await postsSchema.findById(id)
            return res.status(200).json(view.render(post))        

        }catch(e){
            return res.status(404).json({mensagem:e})

        }
    },
    deletePost: async (req,res)=>{
        let idPost = req.params.id
        let token = req.headers.token
        let payload = jwt.decode(token)
        let idUsuarioLogado = payload.id
        

        try{
            //verificar de quem é o post
            let postList = await postsSchema.findOne({id_usuario:idUsuarioLogado,_id:idPost})
            if(postList){   
                let post = await postsSchema.findByIdAndRemove(idPost)
                return res.status(200).json(view.render(post))        
            }
            
            return res.status(401).send('Post não pertence ao usuario')




        }catch(e){
            return res.status(404).json({mensagem:e})

        }
    },
    obterComentariosPost: async(req,res)=>{
        let id = req.params.id 
        try{
            let comentarios = await comentSchema.find({id_post:id})//.populate("posts").populate('usuarios').exec()
            comentarios = comentarios.map(viewComment.render)
            console.log("\n>>",comentarios)
            return res.status(200).json(comentarios)        
        }catch(e){
            return res.status(404).json({mensagem:e})

        }
    }
}
