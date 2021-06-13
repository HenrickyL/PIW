import mongoose from 'mongoose'

export default ()=>{
    let schema = mongoose.Schema({
        texto:{
            type: String,
            require: true
        },
        likes:{
            type: Number,
            require: true
        },
        id_usuario:{
            type: mongoose.Schema.ObjectId,
            ref: "Aluno",
            require: true
        }
    })
    return mongoose.model("Post",schema)
}