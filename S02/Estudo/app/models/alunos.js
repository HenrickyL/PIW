const mongoose = require("mongoose")

module.exports = ()=>{
    let schema = mongoose.Schema({
        nome:{
            type:String,
            required:true
        },
        matricula:{
            type: String,
            required: true,
            unique: true, //ser unico
            // select: false //não permitir selecionar
        }
    })
    return mongoose.model("Aluno",schema);


}