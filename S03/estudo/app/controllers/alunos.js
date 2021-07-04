const alunosSchema = require("../models/alunos")
const view = require("../views/aluno")
const disciplinasSchema = require("../models/matricula")
const bcrypt = require('bcrypt')


module.exports.listaAlunos = async (req,res)=>{
    //query
    try{
        let alunos = await alunosSchema.find();
        let viewAlunos =alunos.map(a=>view.render(a))
        return res.status(200).json(viewAlunos)
    }catch(e){
        return res.status(400).json({menssagem:e})
    }
    

}

module.exports.obterAluno = async(req,res)=>{
    let id = req.params.id
    try{
        let aluno = await alunosSchema.findById(id)
        return res.status(200).json(view.render(aluno))
    }catch(e){
        return res.status(404).json({mensagem:e})
    }
    
   
}

module.exports.inserirAluno = async (req,res)=>{
    let aluno = {
        nome: req.body.nome,
        matricula: req.body.matricula,
        senha: bcrypt.hashSync(req.body.senha,10) 
    }
    try{
        await alunosSchema.create(aluno);
        return res.status(201).json(view.render(aluno))

    }catch(e){
        console.log(e)
        return res.status(400).json({mensagem:e})
    }
}

module.exports.removeAluno = async(req,res)=>{
    let id = req.params.id
    try{
        let aluno = await alunosSchema.findByIdAndDelete(id);
        return res.status(200).json(view.render( aluno))
    }catch(e){
        return res.status(404).json({mensagem:e})

    }

}

module.exports.obterDisciplina = async(req,res)=>{
    let id = req.params.id
    let disciplinas = await disciplinasSchema.find({aluno:id})
    console.log(disciplinas)
    try{
        return res.status(200).json(disciplinas)
    }catch(e){
        return res.status(404).json({mensagem:e})

    }

}