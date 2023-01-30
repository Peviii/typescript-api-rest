import { Request, Response } from 'express';
import { createNewMovie, findOneMovie, updateOneMovie, deleteOneMovie, findAllMovies } from '../services/movie.service';
import { createMovieInput, deleteMovieInput, getAllMoviesInput, getOneMovieInput, updateMovieInput } from '../validation/movie.validation';

export async function createMovie(req: Request<createMovieInput>, res: Response) {
    
    try {
        const movie = await createNewMovie(req.body);
        return res.status(200).json({ movie });
    } catch (error: any) {
        return res.status(400).send(error);
    }
}

export async function findMovie(req: Request<getOneMovieInput["params"]>, res: Response) {
    const id = req.params.id;
    const movie = await findOneMovie({ _id: id});

    if(!movie) { return res.sendStatus(400); }

    return res.status(200).json(movie);
}

export async function findMovies(req: Request<getAllMoviesInput>, res: Response) {
    const movies = await findAllMovies();

    if(!movies) { return res.sendStatus(400); }

    return res.status(200).json(movies);
}

export async function updateMovie(req: Request<updateMovieInput["params"]>, res: Response) {
    const id = req.params.id;
    const movie = findOneMovie({ _id: id });
    const update = req.body;

    if (!movie) { return res.sendStatus(400) }

    const updatedMovie = await updateOneMovie({ id }, update, { new: true, });

    return res.status(200).json(updatedMovie);
}

export async function deleteMovie(req: Request<deleteMovieInput["params"]>, res: Response) {
    const id = req.params.id;
    const movie = await deleteOneMovie({ _id: id });

    if(!movie) { return res.sendStatus(400); }

    return res.status(200).json(movie);
}
