import express from 'express';
import { createMovie, findMovie, updateMovie, deleteMovie, findMovies } from '../controllers/movie.controller';
import validate from '../middleware/validate';
import { createMovieSchema, deleteMovieSchema, getAllMoviesSchema, getOneMovieSchema, updateMovieSchema } from '../validation/movie.validation';

const movie = express.Router();

movie.post('/movies/add', validate(createMovieSchema), createMovie);
movie.get('/movies/all', validate(getAllMoviesSchema), findMovies);
movie.get('/movies/:id', validate(getOneMovieSchema), findMovie);
movie.put('/movies/:id/update', validate(updateMovieSchema), updateMovie);
movie.delete('/movies/:id/delete', validate(deleteMovieSchema), deleteMovie);

export default movie;
