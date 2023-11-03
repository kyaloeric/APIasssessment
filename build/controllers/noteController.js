"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { createNote } from '../services/noteServices';
// export class NoteController {
// //   private noteService: create;
// //   constructor(noteService: NoteService) {
//     this.noteService = noteService;
//   }
//   createNote = (req: Request, res: Response) => {
//     const { title, content } = req.body;
//     const newNote = this.noteService.createNote();
//     res.status(201).json(newNote);
//   };
//   getAllNotes = (req: Request, res: Response) => {
//     const allNotes = this.noteService.getAllNotes();
//     res.json(allNotes);
//   };
//   getNoteById = (req: Request, res: Response) => {
//     const note = this.noteService.getNoteById(req.params.id);
//     if (!note) {
//       return res.status(404).json({ message: 'Note not found' });
//     }
//     res.json(note);
//   };
//   updateNote = (req: Request, res: Response) => {
//     const updatedNote = this.noteService.updateNote(req.params.id, req.body);
//     if (!updatedNote) {
//       return res.status(404).json({ message: 'Note not found' });
//     }
//     res.json(updatedNote);
//   };
//   deleteNote = (req: Request, res: Response) => {
//     const success = this.noteService.deleteNote(req.params.id);
//     if (!success) {
//       return res.status(404).json({ message: 'Note not found' });
//     }
//     res.status(204).send();
//   };
// }
// export function createControllerNote  (req: Request, res: Response) {
//   const newNote = req.body;
//   createNote(newNote);
//   res.json(newNote)
// };
