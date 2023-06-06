require('dotenv').config()
const { server } = require('./app')
const { conn } = require('./DB_connection')
const { PORT } = process.env



conn.sync({ force: true }).then(() => {
    server.listen(PORT,'0.0.0.0', () => {
        console.log(`Server raised in port: ${PORT}`);
    })
})