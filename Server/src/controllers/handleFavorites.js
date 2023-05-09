let myFavorites = [{
	"id": 1,
	"name": "Mariel Carolina",
	"gender": "Female",
	"species": "Human",
	"origin": {
		"name": "unknown",
		"url": ""
	},
	"image": "https://rickandmortyapi.com/api/character/avatar/345.jpeg",
	"status": "Alive"
},{
	"id": 2,
	"name": "Jua Pablo",
	"gender": "Female",
	"species": "Human",
	"origin": {
		"name": "unknown",
		"url": ""
	},
	"image": "https://rickandmortyapi.com/api/character/avatar/345.jpeg",
	"status": "Alive"
}]

const postFav = (req, res) => {
    const character = req.body
    myFavorites.push(character)
    res.status(200)
        .json({ myFavorites })
}

const deleteFav = (req, res) => {
    const {id} = req.params 
    myFavorites = myFavorites.filter((favorite)=> {
        return favorite.id !== Number(id)})
    res.json({myFavorites})
}

module.exports = {
    postFav,
    deleteFav
}