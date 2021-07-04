const MatriculaSchema =require("../models/matricula")()

module.exports.listaMatriculas = async (req,res)=>{
    try{
        let matriculas = await MatriculaSchema.find()//.populate("disciplina").populate('aluno');
        return res.status(200).json(matriculas)
    }catch(e){
        return res.status(404).json({mensagem:e,otario:'você'})

    }

}


module.exports.inserirMatricula = async (req,res)=>{
    let matriculaBody = req.body
    try {
        let Matricula = await MatriculaSchema.create(matriculaBody)
        return res.status(203).json(Matricula)
    } catch (error) {
        return res.status(500).json({mensagem:error})
        
    }
}

