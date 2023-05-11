const { server } = require('../src/app');
const session = require('supertest');
const agent = session(server);

const character = [{
    "id": 1,
    "name": "Rick Sanchez",
    "gender": "Male",
    "species": "Human",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "status": "Alive"
}, {
    "id": 2,
    "name": "Morty Smith",
    "gender": "Male",
    "species": "Human",
    "origin": {
        "name": "unknown",
        "url": ""
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "status": "Alive"
}]

describe('Test de RUTAS', () => {


    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200)
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get('/rickandmorty/character/1')
            expect(response).toHaveProperty(['body', 'id'])
            expect(response).toHaveProperty(['body', 'name'])
            expect(response).toHaveProperty(['body', 'species'])
            expect(response).toHaveProperty(['body', 'gender'])
            expect(response).toHaveProperty(['body', 'status'])
            expect(response).toHaveProperty(['body', 'origin'])
            expect(response).toHaveProperty(['body', 'image'])
        })
        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/9999').expect(500)
        })
    })

    describe('GET /rickandmorty/login', () => {
        it('Debe retornar true si el password y el email son correctos', async () => {
            const response = await agent.get('/rickandmorty/login/?email=juan%40juan.com&password=juan123')
            expect(response).toHaveProperty(['body', 'access'], true)
        })
        it('Debe retornar false si el password es incorrecto', async () => {
            const response = await agent.get('/rickandmorty/login/?email=juan%40juan.com&password=juan124')
            expect(response).toHaveProperty(['body', 'access'], false)
        })
        it('Debe retornar false si el email es incorrecto', async () => {
            const response = await agent.get('/rickandmorty/login/?email=juan%40jua.com&password=juan123')
            expect(response).toHaveProperty(['body', 'access'], false)
        })
    })

    describe('POST /rickandmorty/fav', () => {
        it('lo que se envia por body deber ser devuelto en un array', async () => {
            const response = await agent.post('/rickandmorty/fav').send(character[0])
            expect(response.body).toEqual([character[0]])
        })

        it('Si  se vuelve a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente.', async () => {
            const response = await agent.post('/rickandmorty/fav').send(character[1])
            expect(response.body).toEqual(character)
        })
    })

    describe('DELETE /rickandmorty/fav/:id', () => {
        it('En el caso de que no haya ningún personaje con el ID que se envia, debe devolver un array sin modificar', async () => {
            const response = await agent.delete('/rickandmorty/fav/4')
            expect(response.body).toEqual(character)
        })

        it('Cuando haya un personaje con el ID valido, debe retornar un array modifcado', async()=>{
            const response = await agent.delete('/rickandmorty/fav/1')
            expect(response.body).toEqual([character[1]])
        })

    })

})