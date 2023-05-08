// const axios = require('axios')

// const getCharById = (res, id) => {
//     axios.get((`https://rickandmortyapi.com/api/character/${id}`))
//         .then((result) => result.data)
//         .then((data) => {
//             const character = {
//                 id: data.id,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 origin: data.origin,
//                 image: data.image,
//                 status: data.status
//             }
//             res.writeHead(200, { 'Content-type': 'application/json' })
//                 .end(JSON.stringify(character))

//         })
//         .catch((error)=>{
//             res.writeHead(500, { 'Content-type': 'text/plain ' })
//             res.end(error.message)
//         })
// }

// module.exports = {
//     getCharById
// }

const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios')

const getCharById = (req, res) => {
    const { id } = req.params
    axios(URL + id)
        .then(({ data }) => {
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

        })
        .catch((error) => {
            res.status(500)
                .message(error)
        })
}
module.exports = getCharById