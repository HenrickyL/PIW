//main.js
    //execução e importação express e banco
import http from 'http'
import expressApp from './config/express.js'
import db from './config/database.js'

const app = expressApp()

http.createServer(app).listen(app.get('port'),()=>{
    console.log('express server escutando a porta '+app.get('port'))

})

let collection = "sistemausuarios"
db(`mongodb://localhost/${collection}`)