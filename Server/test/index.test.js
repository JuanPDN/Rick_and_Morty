const server  = require('../src/app');
const session = require('supertest');
const agent = session(server);


describe('Test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async() => {
            await agent.get('/rickandmorty/character/1').expect(200); 
        })
    })
})