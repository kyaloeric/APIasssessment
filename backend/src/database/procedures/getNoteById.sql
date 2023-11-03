-- USE NotesDB;

CREATE OR ALTER PROCEDURE getNoteById
    @noteId VARCHAR(100)
AS
BEGIN
    SELECT id, title, content, createdAt
    FROM Notes
    WHERE id = @noteId;
END;
