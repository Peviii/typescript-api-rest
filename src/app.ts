import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connect from './database/db.connect';
import movie from './routes/movie.route';
import studio from './routes/studio.route';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
//routes
app.use(movie);
app.use(studio);
app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Ola Typescript no back-end, seja muito bem vindo!")
});
/** */
app.listen(port, () => {
    console.log("server running on localhost:3000")
    connect();
});
