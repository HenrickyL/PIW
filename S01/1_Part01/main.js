const http = require('http')
const app = require('./config/express')()

http.createServer(app).listen(app.get('port'),()=>{
    console.log('express server escutando a porta '+app.get('port'))
})