const mongoose = require("mongoose")

module.exports = ()=>{
    let schema = mongoose.Schema({
        aluno:{
            type:String,
            required:true
        },
        carga_horaria:{
            type: Number,
            require:true
        },
        codigo:{
            type: String,
            required: true,
            unique: true, //ser unico
            // select: false //não permitir selecionar
        }
    })
    return mongoose.model("Disciplina",schema);


}