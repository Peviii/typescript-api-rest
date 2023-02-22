import Studio from "../src/models/studio.model";
import request from 'supertest';
import { app } from "../src/app";

describe('GET', () => {
    test('it should be able to return a 404', async () => {
        const studioId = 'studio001'
        await request(app).get(`/studio/${studioId}`)
              .expect(404)
    });
});
