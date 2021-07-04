import schemaAluno from '../models/usuario.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export default {
    logar: async (req,res,next)=>{
        let currentEmail = req.body.email
        try{
            let aluno = await schemaAluno.findOne({email:currentEmail})
            if(aluno){
                if(bcrypt.compareSync(req.body.senha,aluno.senha)){
                    let payload = {id:aluno._id}
                    let token = jwt.sign(payload,'senha_secreta')
                    return res.status(200).json({token:token,payload})
                }else{
                    return res.status(401).send('credenciais erradas!')
                }
            }else{
                return  res.status(404).send('Falha na Autentificação!')
            }
        }catch(e){
            return  res.status(500).send('Erro interno!')
        }




    },
    check: (req,res,next)=>{
        let token = req.headers.token
        jwt.verify(token,'senha_secreta',(err,decoded)=>{
            if(err){
                return res.status(401).send('Token Invalido!')
            }else{
                next()
            }
        })
    }


}
