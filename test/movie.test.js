const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

let token, movie_id;

describe('Movies Tests', () => {
    before((done) => {
        chai.request(server)
            .post('/api/users/login')
            .send({username: 'johndoe', password: '123456/*'})
            .end((err, data) => {
                token = data.body.token;
                done();
            });
    });

    it('(GET /api/movies) -> Get all movies', (done) => {
        chai.request(server)
            .get('/api/movies')
            .set({'Authorization': `Bearer ${token}`})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it('(POST api/movies) -> Add a movie', (done) => {
        const movie = {
            "title": "Yengeç Sepeti",
            "category": "Dram",
            "country": "Turkey",
            "year": 1995,
            "imdb_score": 5.1
        };
        chai.request(server)
            .post('api/movies')
            .send(movie)
            .set({'Authorization': `Bearer ${token}`})
            .end((err, res) => {
                res.should.have.status(201);
                res.body.should.be.a('object');
                res.body.should.have.property('title');
                res.body.should.have.property('category');
                movie_id = res.body.id;
                done();
            });
    });

    it('(GET/:movie_id -> Get a movie by the given id', (done) => {
        chai.request(server)
            .get('api/movies/'+movie_id)
            .set({'Authorization': `Bearer ${token}`})
            .end((err, res) => {
                res.body.should.be.a('object');
                res.body.should.have.property('title');
                res.body.should.have.property('category');
                done();
            });
    });
});
