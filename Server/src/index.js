const { server } = require('./app')
const { conn } = require('./DB_connection')

const PORT = 3000

conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
        console.log(`Server raised in port: ${PORT}`);
    })
})