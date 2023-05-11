const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

const getCharById = async (req, res) => {
    try {
        const { id } = req.params
        const { data } = await axios(URL + id)
        if (data) {
            res.status(200).json({
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            })
        } else {
            res.status(404).send('Not found')
        }

    } catch (error) {
        res.status(500)
            .json({ error: error.message })
    }
}
module.exports = getCharById