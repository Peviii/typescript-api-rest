import Movie from "../src/models/movie.model";
import request from 'supertest';
import { createServer } from '../src/server';

const app = createServer();

describe('MODEL', () => {
    test('it should be able to create a movie', () => {
        const movie = new Movie({
            name: "movie",
            year: 2001,
            gender: "gender",
            duration: "duration",
            studio: "example-sttudio-id"
        })
        expect(movie).toBeTruthy()
    });
});

describe('GET', () => {
    test('it should be able to return a 404', async () => {
        const movieId = 'movie001'
        await request(app).get(`/movie/${movieId}`)
              .expect(404)
    });
});
