import Studio from "../src/models/studio.model";
import request from 'supertest';
import { createServer } from '../src/server';

const app = createServer();

describe('MODEL', () => {
    test('it should be able to create a studio', () => {
        const studio = new Studio({
            name: "studio",
            specialty: "specialty",
            budgets: "budgets"
        })
        expect(studio).toBeTruthy()
    });
});

describe('GET', () => {
    test('it should be able to return a 404', async () => {
        const studioId = 'studio001'
        await request(app).get(`/studio/${studioId}`)
              .expect(404)
    });
});
