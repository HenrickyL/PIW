let controller = require("../controllers/matricula")
const auth = require('../controllers/auth')
module.exports = (app)=>{
    app.use('/matricula',auth.checar)
    app.get('/matricula',controller.listaMatriculas)
    app.post('/matricula',controller.inserirMatricula)
}