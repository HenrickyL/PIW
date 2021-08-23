import mongoose from 'mongoose'

function usuarios(){
    let schema = new mongoose.Schema({
        nome:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true,
            unique: true
        },
        senha:{
            type: String,
            require: true
        }
    })
    return mongoose.model("Usuario",schema)
}

export default usuarios()
