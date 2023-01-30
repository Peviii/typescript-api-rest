import { FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import { omit } from 'lodash';
import Studio, { studioType } from '../models/studio.model';

export async function findOneStudio(query: FilterQuery<studioType>, options: QueryOptions = { lean: false }) {
    const oneStudio = await Studio.findOne(query, {}, options).exec();
    return omit(oneStudio);
}

export async function findAllStudios() {
    return Studio.find();
}

export async function createNewStudio(input: studioType) {
    try {
        const studio = await Studio.create(input)
        return omit(studio);
    } catch (error: any) {
        throw new Error(error);
    }
}

export async function updateOneStudio(
    query: FilterQuery<studioType>,
    update: UpdateQuery<studioType>,
    options: QueryOptions,
) {
    const updated = await Studio.updateOne(query, update, options)
    return omit(updated);
}

export async function deleteOneStudio(query: FilterQuery<studioType>) {
    const deleted = await Studio.deleteOne(query);
    return omit(deleted);
}

