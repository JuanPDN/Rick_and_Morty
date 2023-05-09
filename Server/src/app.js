const  {server}  = require('./index')

const PORT = 3001

server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
})
