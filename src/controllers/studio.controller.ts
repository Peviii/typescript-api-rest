import { Request, Response } from 'express';
import { createNewStudio, findOneStudio, updateOneStudio, deleteOneStudio, findAllStudios } from '../services/studio.service';
import { createStudioInput, deleteStudioInput, getAllStudiosInput, getOneStudioInput, updateStudioInput } from '../validation/studio.validation';

export async function createStudio(req: Request<createStudioInput>, res: Response) {
    
    try {
        const studio = await createNewStudio(req.body);
        return res.status(200).json(studio);
    } catch (error: any) {
        return res.status(400).send(error);
    }
}

export async function findStudio(req: Request<getOneStudioInput["params"]>, res: Response) {
    const id = req.params.id;
    const studio = await findOneStudio({ _id: id});

    if(!studio) { return res.sendStatus(400); }

    return res.status(200).json(studio);
}

export async function findStudios(req: Request<getAllStudiosInput>, res: Response) {
    const studios = await findAllStudios();

    if(!studios) { return res.sendStatus(400); }

    return res.status(200).json(studios);
}

export async function updateStudio(req: Request<updateStudioInput["params"]>, res: Response) {
    const id = req.params.id;
    const studio = findOneStudio({ _id: id });
    const update = req.body;

    if (!studio) { return res.sendStatus(400) }

    const updatedStudio = await updateOneStudio({ id }, update, { new: true, });

    return res.status(200).json(updatedStudio);
}

export async function deleteStudio(req: Request<deleteStudioInput["params"]>, res: Response) {
    const id = req.params.id;
    const studio = await deleteOneStudio({ _id: id });

    if(!studio) { return res.sendStatus(400); }

    return res.status(200).json(studio);
}
