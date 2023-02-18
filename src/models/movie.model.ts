import mongoose from 'mongoose';
import { studioType } from './studio.model';

export interface movieType extends mongoose.Document {
    name: string;
    year: number;
    gender: string;
    duration: string;
    studio: studioType['_id'];
}

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    gender: { type: String, required: true },
    duration: { type: String, required: true },
    studio: { type: mongoose.Schema.Types.ObjectId, ref: 'studio', required: true }
}, { timestamps: true });

const Movie = mongoose.model<movieType>('Movie', movieSchema);

export default Movie;
