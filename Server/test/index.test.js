const { server } = require('../src/app');
const session = require('supertest');
const agent = session(server);


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
            const response = await agent.post('/rickandmorty/fav').send({ arg1: 3, arg2: 7 })
            expect(response.body).toEqual([{ arg1: 3, arg2: 7 }])
        })

        it('Si  se vuelve a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente.', async () => {
            const response = await agent.post('/rickandmorty/fav').send({ arg1: 1, arg2: 2 })
            expect(response.body).toEqual([{ arg1: 3, arg2: 7 }, { arg1: 1, arg2: 2 }])
        })
    })

})