import express from 'express';
import { createStudio, findStudio, updateStudio, deleteStudio, findStudios } from '../controllers/studio.controller';
import validate from '../middleware/validate';
import { createStudioSchema, deleteStudioSchema, getAllStudiosSchema, getOneStudioSchema, updateStudioSchema } from '../validation/studio.validation';

const studio = express.Router();

studio.post('/studios/add', validate(createStudioSchema), createStudio);
studio.get('/studios/all', validate(getAllStudiosSchema), findStudios);
studio.get('/studios/:id', validate(getOneStudioSchema), findStudio);
studio.put('/studios/:id/update', validate(updateStudioSchema), updateStudio);
studio.delete('/studios/:id/delete', validate(deleteStudioSchema), deleteStudio);

export default studio;
