import mongoose from 'mongoose'

function comentario(){
    let schema = new mongoose.Schema({
        texto:{
            type: String,
            require:true
        },
        id_post:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Post",
            require:true
        },
        likes:{
            type: Number,
            default:0
        },
        id_usuario:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Usuario",
            require:true
        },
        username:String
    })
    return mongoose.model("Comentario",schema)
}


export default comentario()
