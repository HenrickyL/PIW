let controller = require("../controllers/disciplinas")

module.exports = (app)=>{
    app.get('/disciplinas',controller.listaDisciplinas)
    app.post('/disciplinas',controller.inserirDisciplina)
}