module.exports.render=(aluno)=>{
       return{
           id: aluno._id,
           nome: aluno.nome,
           matricula: aluno.matricula
       }
}