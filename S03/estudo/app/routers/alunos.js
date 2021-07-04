let controller = require("../controllers/alunos")
let auth = require('../controllers/auth')
module.exports = (app)=>{
    app.post('/alunos/login',auth.logar)
    app.post('/alunos',controller.inserirAluno)
    app.use('/alunos',auth.checar)
    app.get('/alunos',controller.listaAlunos)
    app.get('/alunos/:id',controller.obterAluno)
    app.delete('/alunos/:id',controller.removeAluno)
    app.get('/alunos/:id/disciplinas',controller.obterDisciplina)

}