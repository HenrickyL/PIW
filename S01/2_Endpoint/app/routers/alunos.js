let controller = require("../controllers/alunos")

module.exports = (app)=>{
    app.get('/alunos',controller.listaAlunos)
    app.get('/alunos/:id',controller.obterAluno)
    app.post('/alunos',controller.inserirAluno)
    app.delete('/alunos/:id',controller.removeAluno)
}