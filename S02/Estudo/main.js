const http = require('http')
const app = require('./config/express')()
const db = require("./config/database.js")

http.createServer(app).listen(app.get('port'),()=>{
    console.log('express server escutando a porta '+app.get('port'))
})

let collection = "sistemamatricula"
db(`mongodb://localhost/${collection}`)