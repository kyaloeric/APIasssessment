import Joi from "joi";


export const createNoteSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});




export const updateNoteSchema = Joi.object({
  id: Joi.string().uuid().required(),
  title: Joi.string(),
  content: Joi.string(),
  createdAt: Joi.date(),
});