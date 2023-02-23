import { Request, Response } from 'express';
import dotenv from 'dotenv';
import connect from './database/db.connect';
import movie from './routes/movie.route';
import studio from './routes/studio.route';
import { createServer } from './server';
dotenv.config();

const port = process.env.PORT || 3000;
const app = createServer();

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Ola, seja muito bem vindo a esta aplicação!")
});

app.listen(port, () => {
    console.log("Running on localhost:3000")
    connect();
});

export { app }
