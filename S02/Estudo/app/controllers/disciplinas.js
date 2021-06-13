const disciplinaSchema =require("../models/disciplinas")()

module.exports.listaDisciplinas = async (req,res)=>{
    try{
        let disciplinas = await disciplinaSchema.find();
        return res.status(200).json(disciplinas)
    }catch(e){
        return res.status(404).json({mensagem:e})

    }

}


module.exports.inserirDisciplina = async (req,res)=>{
    let discipBody = req.body
    try {
        let disciplina = await disciplinaSchema.create(discipBody)
        return res.status(203).json(disciplina)
    } catch (error) {
        return res.status(500).json({mensagem:error})
        
    }
}

