let controller = require("../controllers/matricula")

module.exports = (app)=>{
    app.get('/matricula',controller.listaMatriculas)
    app.post('/matricula',controller.inserirMatricula)
}