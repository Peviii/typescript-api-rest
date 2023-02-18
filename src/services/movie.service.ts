import { FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import { omit } from 'lodash';
import Movie, { movieType } from '../models/movie.model';

export async function findOneMovie(query: FilterQuery<movieType>, options: QueryOptions = { lean: false }) {
    const oneMovie = await Movie.findOne(query, {}, options).exec();
    return oneMovie;
}

export async function findAllMovies() {
    return Movie.find().exec();
}

export async function createNewMovie(input: movieType) {
    try {
        const movie = await Movie.create(input);
        return omit(movie.toJSON());
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateOneMovie(
    query: FilterQuery<movieType>,
    update: UpdateQuery<movieType>,
    options: QueryOptions,
) {
    const updated = Movie.updateOne(query, update, options);
    return omit(updated);
}

export async function deleteOneMovie(query: FilterQuery<movieType>) {
    const deleted =  Movie.deleteOne(query);
    return omit(deleted);
}
