import { z } from 'zod';

export const createStudioSchema = z.object({
   body: z.object({
        name: z.string({
            required_error: "name is required",
        }).min(4, "name should be at least 4 characters long"),
        specialty: z.string({
            required_error: "specialty is required",
        }),
        budgets: z.string({
            required_error: "budgets is required",
        }),
   }),
});

export const params = z.object({
    id: z.string({
        required_error: ("id is required"),
    }),
});

export const getOneStudioSchema = z.object({
    params,
});

export const getAllStudiosSchema = z.object({});

export const updateStudioSchema = z.object({
    params,
    body: z.object({
        name: z.string(),
        specialty: z.string(),
        budgets: z.string(),
    }).partial(),
});

export const deleteStudioSchema = z.object({
    params,
});

export type createStudioInput = Omit<z.TypeOf<typeof createStudioSchema>, "body">;
export type updateStudioInput = z.TypeOf<typeof updateStudioSchema>;
export type deleteStudioInput = z.TypeOf<typeof deleteStudioSchema>;
export type getOneStudioInput = z.TypeOf<typeof getOneStudioSchema>;
export type getAllStudiosInput = z.TypeOf<typeof getAllStudiosSchema>;
