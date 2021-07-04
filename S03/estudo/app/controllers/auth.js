const Aluno = require('../models/alunos')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
module.exports.logar =  async(req,res,next)=>{
    let matricula = req.body.matricula
    try {
        let aluno = await Aluno.findOne({matricula})
        if(aluno){
            if(bcrypt.compareSync(req.body.senha, aluno.senha)){
                let token = jwt.sign({id:aluno._id},'senha_secreta')
                res.status(200).json({token:token})
            }else{
                res.status(404).send('credenciais erradas!')
    
            }
        }else{
            res.status(400).send('Falha em autenticar')
    
        }
        
    } catch (error) {
        res.status(500).send('Erro interno')
        
    }
}

module.exports.checar = (req,res,next)=>{
  let token = req.headers.token
  jwt.verify(token,'senha_secreta',(err,decoded)=>{
      if(err){
          return res.status(401).send('token invalido')
      }
      next()
})
}