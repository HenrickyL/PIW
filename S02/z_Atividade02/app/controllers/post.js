import schema from '../models/post.js'
import view from '../views/post.js'

const postsSchema = schema()


export default {
    listarPosts: async (req,res)=>{
        try{
            let posts = await postsSchema.find().populate('usuarios');
            posts = posts.map(p=>view.render(p))
            return res.status(200).json(posts)
        }catch(e){
            return res.status(500).json({mensagem:e})
        }
    },
    inserePost: async (req,res) =>{
        let corpo = req.body
        try{
            let post = await postsSchema.create(corpo)
            return res.status(201).json(view.render(post))        
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
        let id = req.params.id 
        try{
            let post = await postsSchema.findByIdAndRemove(id)
            return res.status(200).json(view.render(post))        

        }catch(e){
            return res.status(404).json({mensagem:e})

        }
    }
}