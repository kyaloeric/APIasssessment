
// import { Note } from '../types/interface.ts';
// import sql from 'mssql'
// // import { notes } from '../data';


// // export function getNotes(){
// //   return notes;
// // }

// import { ConnectionPool, VarChar, DateTime } from 'mssql';
// import { query } from './dbConnectServices';
// import { Request, Response } from 'express';
// // import { dbConnectService } from './dbConnectServices';

// // export class NoteService {
// //   private pool: ConnectionPool;

// //   constructor(pool: ConnectionPool) {
// //     this.pool = pool;
// //   }

// //   async createNote(title: string, content: string): Promise<Note | undefined> {
// //     try {
// //       const id = this.generateUniqueId();
// //       const createdAt = new Date();
  
// //       const request = this.pool.request();
// //       request.input('id', VarChar, id);
// //       request.input('title', VarChar, title);
// //       request.input('content', VarChar, content);
// //       request.input('createdAt', DateTime, createdAt);
  
// //       const query = `
// //         INSERT INTO Notes (Id, Title, Content, CreatedAt)
// //         VALUES (@id, @title, @content, @createdAt)`;
  
// //       await request.query(query);
  
// //       return { id, title, content, createdAt };
// //     } catch (error) {
// //       console.error('Error creating note:', error);
// //       return undefined;
// //     }
// //   }
  

// //   async getAllNotes(): Promise<Note[]> {
// //     try {
// //       const request = this.pool.request();
// //       const result = await request.query('SELECT * FROM Notes');
// //       return result.recordset;
// //     } catch (error) {
// //       console.error('Error fetching notes:', error);
// //       return [];
// //     }
// //   }

// //   async getNoteById(id: string): Promise<Note | undefined> {
// //     try {
// //       const request = this.pool.request();
// //       request.input('id', VarChar, id);
// //       const result = await request.query('SELECT * FROM Notes WHERE Id = @id');
// //       return result.recordset[0];
// //     } catch (error) {
// //       console.error('Error fetching note by ID:', error);
// //       return undefined;
// //     }
// //   }

// //   async updateNote(id: string, updatedNote: Partial<Note>): Promise<Note | undefined> {
// //     try {
// //       const existingNote = await this.getNoteById(id);
// //       if (!existingNote) {
// //         return undefined;
// //       }

// //       const request = this.pool.request();
// //       request.input('id', VarChar, id);

// //       if (updatedNote.title) {
// //         request.input('title', VarChar, updatedNote.title);
// //         await request.query('UPDATE Notes SET Title = @title WHERE Id = @id');
// //         existingNote.title = updatedNote.title;
// //       }

// //       if (updatedNote.content) {
// //         request.input('content', VarChar, updatedNote.content);
// //         await request.query('UPDATE Notes SET Content = @content WHERE Id = @id');
// //         existingNote.content = updatedNote.content;
// //       }

// //       return existingNote;
// //     } catch (error) {
// //       console.error('Error updating note:', error);
// //       return undefined;
// //     }
// //   }

// //   async deleteNote(id: string): Promise<boolean> {
// //     try {
// //       const request = this.pool.request();
// //       request.input('id', VarChar, id);
// //       await request.query('DELETE FROM Notes WHERE Id = @id');
// //       return true;
// //     } catch (error) {
// //       console.error('Error deleting note:', error);
// //       return false;
// //     }
// //   }

// //   private generateUniqueId(): string {
// //     return '_' + Math.random().toString(36).substr(2, 9);
// //   }
// // }




// export async function createNote(req:Request, res:Response) {
  
// try {
//    const {id, title, content} = req.body
  
//   const createdAt = new Date();

//   let queryString = `insert into Notes (id, title, content , Created_at ) VALUES('${id}', '${title}', '${content}', '${createdAt}')`

//   const result = await query(queryString)

//   // console.log(result.recordset);
  

//   res.send("success")

  
// } catch (error) {
//   console.log(error);
  
// }
 
  
  

 
// }