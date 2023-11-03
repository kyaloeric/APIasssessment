import { Router, Request, Response } from 'express';
import { NoteController } from '../controllers/noteControllers';
import { NoteService } from '../services/noteService';

const router = Router();
const noteService = new NoteService();
const noteController = new NoteController(noteService);

router.post('/notes', noteController.createNote);
router.get('/notes', noteController.getAllNotes);
router.get('/notes/:id', noteController.getNoteById);
router.put('/notes/:id', noteController.updateNote);
router.delete('/notes/:id', noteController.deleteNote);

export default router;
