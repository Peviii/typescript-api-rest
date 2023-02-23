import express from 'express';
import movie from './routes/movie.route';
import studio from './routes/studio.route';

export function createServer() {
    const app = express()

    app.use(express.json());

    app.use(movie);
    app.use(studio);

    return app;
}
