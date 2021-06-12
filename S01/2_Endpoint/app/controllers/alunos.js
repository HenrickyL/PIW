let alunos = [
    {_id:1, nome:'João', matricula:'123'},
    {_id:2, nome:'Pedro', matricula:'234'},
]
module.exports.listaAlunos = (req,res)=>{
    //query
    if('nome' in req.query){
        let nome = req.query.nome
        let alunos_res = alunos.filter(aluno=>aluno.nome.toLocaleLowerCase()==nome)
        res.json(alunos_res)
    }else{

        res.json(alunos);
    }

}

module.exports.obterAluno = (req,res)=>{
    let id = req.params.id
    var aluno = alunos.find(aluno => aluno._id == id)
    if(aluno)
        res.json(aluno)
    else
        res.stutus(404).send("aluno não encontrado")
}

module.exports.inserirAluno = (req,res)=>{
    let aluno = req.body
    if(aluno){
        alunos.push(aluno)
        return res.status(201).json(aluno)
    }
}

module.exports.removeAluno = (req,res)=>{
    let id = req.params.id
    let aluno = alunos.find(aluno => aluno._id == id)
    if(aluno){
        alunos = alunos.filter(a=>a._id != id)
        res.status(204).json(aluno)
    }else{
        res.status(404).send("Aluno não encontrado")
    }
}