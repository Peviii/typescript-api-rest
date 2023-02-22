import Movie from "../src/models/movie.model";
import request from 'supertest';
import { app } from "../src/app";

describe('GET', () => {
    test('it should be able to return a 404', async () => {
        const movieId = 'movie001'
        await request(app).get(`/movie/${movieId}`)
              .expect(404)
    });
});
