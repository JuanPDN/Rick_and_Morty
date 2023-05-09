const express = require('express')
const server = express()
const getCharById = require('./routes/index')
const login = require('./routes/index')
const postFav = require('./routes/index')
const deleteFav = require('./routes/index')


server.use(express.json())
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});


server.use('/rickandmorty', getCharById)
server.use('/rickandmorty', login)
server.use('/rickandmorty',postFav)
server.use('/rickandmorty', deleteFav)





module.exports = {
    server
}