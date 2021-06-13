const mongoose = require("mongoose")

module.exports = ()=>{
    let schema = mongoose.Schema({
        aluno:{
            type: mongoose.Schema.ObjectId,
            ref:"Aluno",
            required:true
        },
        disciplina:{
            type: mongoose.Schema.ObjectId,
            ref:"Disciplina",
            require:true
        }
    })
    return mongoose.model("Matricula",schema);


}
