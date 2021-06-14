import schema from '../models/usuario.js'
import view from '../views/usuario.js'
import viewPost from '../views/post.js'

import schemaPost from '../models/post.js'

const userSchema = schema
const postSchema = schemaPost

export default {
    listarUsuarios: async (req,res)=>{
        try {
            let usuarios = await userSchema.find();
            usuarios.map(u=>view.render(u))
            return res.status(200).json(usuarios)
        } catch (e) {
            return res.status(500).json({menssagem:e})
            
        }
    },
    inserirUsuario: async (req, res)=>{
        let corpo = req.body
        try{
            let usuario = await userSchema.create(corpo)
            return res.status(201).json(view.render(usuario))
        }catch(e){
            return res.status(400).json({menssagem:e})

        }
    },
    obterUsuario: async (req,res)=>{
        let id = req.params.id
        try{
            let usuario = await userSchema.findById(id)
            return res.status(200).json(view.render(usuario))
        }catch(e){
            return res.status(400).json({menssagem:e})

        }
    },
    removerUsuario: async (req,res)=>{
        let id = req.params.id
        try{
            let usuario = await userSchema.findByIdAndRemove(id)
            return res.status(200).json(view.render(usuario))
        }catch(e){
            return res.status(400).json({menssagem:e})

        }
    },
    obterPostsUsuario: async (req,res)=>{
        let id = req.params.id
        try{
            let posts = await postSchema.find({id_usuario:id}).populate('usuarios').exec()
            posts = posts.map(viewPost.render)
            return res.status(200).json(posts)

        }catch(e){
            return res.status(400).json({menssagem:"Posts não encontardos",error:e})
        }
    }




}