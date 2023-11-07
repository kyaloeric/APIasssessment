import { Router } from "express";
import { createNote, deleteNote, getAllNotes, getSingleNote, testNote, updateNote } from "../controllers/noteController";


const note_router = Router();

// note_router.get("/", testNote);
note_router.post("/", createNote);
note_router.get("/", getAllNotes);
note_router.get("/:id", getSingleNote);
note_router.put("/", updateNote);
note_router.delete("/:id", deleteNote);



export default note_router;