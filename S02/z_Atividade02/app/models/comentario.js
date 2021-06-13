import mongoose from 'mongoose'

export default ()=>{
    let schema = mongoose.Schema({
        texto:{
            type: String,
            require:true
        },
        id_post:{
            type:mongoose.Schema.ObjectId,
            require:true
        },
        id_usuario:{
            type:mongoose.Schema.ObjectId,
            require:true
        }
    })
    return mongoose.model("Comentario",schema)
}