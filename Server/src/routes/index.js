const getCharById = require('../controllers/getCharById')
const {postFav, deleteFav} = require('../controllers/handleFavorites')
const login = require('../controllers/login')
const express = require('express')
const router = express.Router()


router.get('/character/:id',getCharById(req,res))
router.get('/login',login(req, res))
router.post('/fav', postFav(req, res))
router.delete('/fav/:id',deleteFav(req, res))



module.exports = router