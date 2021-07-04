import mongoose from 'mongoose'

function comentario(){
    let schema = mongoose.Schema({
        texto:{
            type: String,
            require:true
        },
        id_post:{
            type:mongoose.Schema.ObjectId,
            ref:"Post",
            require:true
        },
        id_usuario:{
            type: mongoose.Schema.ObjectId,
            ref:"Usuario",
            require:true
        }
    })
    return mongoose.model("Comentario",schema)
}


export default comentario()