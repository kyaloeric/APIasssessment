import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import mssql from 'mssql'
import {v4} from 'uuid'
import bcrypt from 'bcrypt'
import { sqlConfig } from '../config/sqlConfig'
import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'
import {Note } from '../interfaces/note'
import Connection from '../dbhelpers/dbhelpers'

const dbhelper = new Connection

export const createNote = async(req:Request, res: Response) =>{
    try {
        let {title, content, createdAt} = req.body

        let id = v4()


        let result = dbhelper.execute('addNewNote', {
            id, title, content, createdAt
        })
        

        return res.status(200).json({
            message: 'Note added successfully'
        })
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}

export const getAllNotes = async(req:Request, res:Response)=>{
    try {

        const pool = await mssql.connect(sqlConfig)

        let notes = (await pool.request().execute('fetchAllNotes')).recordset

        return res.status(200).json({
            notes: notes
        })
        
    } catch (error) {
        return res.json({
            error: error
        })
    }
}








export const getNoteById = async (req: Request, res: Response) => {
    try {
        let id = v4()

        const pool = await mssql.connect(sqlConfig);

        let note = (await pool.request().input('noteId', id).execute('getNoteById')).recordset[0];

        return res.status(200).json({
            note: note,
        });
    } catch (error) {
        return res.json({
            error: error,
        });
    }
};

export const updateNote = async (req: Request, res: Response) => {
    try {
        const noteId = req.params.id;
        let { title, content, createdAt } = req.body;

        const pool = await mssql.connect(sqlConfig);

        await pool
            .request()
            .input('noteId', noteId)
            .input('title', title)
            .input('content', content)
            .input('createdAt', createdAt)
            .execute('updateNote');

        return res.status(200).json({
            message:''
        });
    } catch (error) {
        return res.json({
            error: error,
        });
    }
};

export const deleteNote = async (req: Request, res: Response) => {
    try {
        const noteId = req.params.noteId;

        const pool = await mssql.connect(sqlConfig);

        await pool.request().input('noteId', noteId).execute('deleteNoteById');

        return res.status(200).json({
            message: 'Note deleted successfully',
        });
    } catch (error) {
        return res.json({
            error: error,
        });
    }
};