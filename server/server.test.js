const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('Get /', () => {
        it ('should return hello there response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect(res => {
                    expect(res.body).toInclude({
                        name: 'Todo App v1.0'
                    });
                })
                .end(done);
        });
    });

    describe('Get /users', () => {
        it ('should includes me', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect(res => {
                    expect(res.body).toInclude({
                        name: 'lyn',
                        age: 25
                    });
                })
                .end(done);
        });
    });
});
