import mongoose from 'mongoose'

function posts(){
    let schema = new mongoose.Schema({
        texto:{
            type: String,
            require: true
        },
        likes:{
            type: Number,
            require: true
        },
        id_usuario:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
            require: true
        },
        username:String
    })
    return mongoose.model("Post",schema)
}


export default posts()
