export default {
    render: (user)=>{
        return {
            id:     user._id,
            nome:   user.nome,
            email:  user.email,
            // senha:  user.senha
        }
    }

} 
