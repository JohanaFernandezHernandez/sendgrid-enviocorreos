const request = require('supertest');
const app = require('../../app');

it('Can send emails with valid inputs', async ( ) => {
    return request(app)
    .post('/api/mail')
    .send({
        to: 'najofe5@gmail.com',
        subject: 'Hola aqui probando',
        text: 'some random text',
        html: '<strong>Some random html code</strong>',
        sandboxMode: true
    }).expect(201);
})

it('Returns a 400 status code whith invalid credentials', async () => {
    return request(app)
    .post('/api/mail')
    .send({
        to: '',
        subject: '',
        text: 'some random text',
        html: '<strong>Some random html code</strong>',
        sandboxMode: true
    }).expect(400);
})