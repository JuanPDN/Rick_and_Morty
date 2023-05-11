const { server } = require('../src/app');
const session = require('supertest');
const agent = session(server);


describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
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
})