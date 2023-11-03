import { Router } from 'express';
// import { NoteController } from '../controllers/noteController';
// import { NoteService } from '../services/noteServices';
import { pool } from 'mssql';
import { createNote } from '../services/noteServices';
// import { createControllerNote } from '../controllers/noteController';

const noteRouter = Router();
// const noteService = new NoteService(pool);
// const noteController = new NoteController(noteService);

noteRouter.post('/notes', createNote);
// noteRouter.get('/notes', noteController.getAllNotes);
// noteRouter.get('/notes/:id', noteController.getNoteById);
// noteRouter.put('/notes/:id', noteController.updateNote);
// noteRouter.delete('/notes/:id', noteController.deleteNote);

export default noteRouter;
