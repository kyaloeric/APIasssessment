-- USE NotesDB;



CREATE OR ALTER PROCEDURE fetchAllNotes
AS
BEGIN
    SELECT * FROM Notes
END