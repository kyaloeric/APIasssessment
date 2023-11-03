import { Router } from "express";
import { createNote, getNoteById, getAllNotes } from "../controller/noteController";

const note_router = Router()

note_router.post('/add', createNote)
note_router.get('/notes', getAllNotes);
note_router.get('/notes/:id', getNoteById);
// note_router.put('/notes/:id', updateNoteById);
// note_router.delete('/notes/:id', deleteNoteById);



export default note_router;