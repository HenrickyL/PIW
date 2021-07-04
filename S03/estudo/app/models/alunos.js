const mongoose = require("mongoose")

module.exports = function(){
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
        },
        senha:{
            type: String,
            require:true
        }
    })
    return mongoose.model("Aluno",schema);


}()