import { z } from 'zod';

export const createMovieSchema = z.object({
   body: z.object({
        name: z.string({
            required_error: "name is required",
        }).min(3, "name should be at least 10 characters long"),
        year: z.number({
            required_error: "year is required",
        }),
        gender: z.string({
            required_error: "gender is required",
        }),
        duration: z.string({
            required_error: "duration is required",
        }),
        studio: z.string({
            required_error: "studio is required",
        }),
   }),
});


export const params = z.object({
        id: z.string({
            required_error: "id is required",
        }),
});

export const getOneMovieSchema = z.object({
    params,
});

export const getAllMoviesSchema = z.object({});

export const updateMovieSchema = z.object({
    params,
    body: z.object({
        name: z.string(),
        year: z.number(),
        gender: z.string(),
        duration: z.string(),
        studio: z.string(),
    }).partial(),
});

export const deleteMovieSchema = z.object({
    params,
});

export type createMovieInput = Omit<z.TypeOf<typeof createMovieSchema>, "body">;
export type updateMovieInput = z.TypeOf<typeof updateMovieSchema>;
export type deleteMovieInput = z.TypeOf<typeof deleteMovieSchema>;
export type getOneMovieInput = z.TypeOf<typeof getOneMovieSchema>;
export type getAllMoviesInput = z.TypeOf<typeof getAllMoviesSchema>;
