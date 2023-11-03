-- USE NotesDB;



CREATE OR ALTER PROCEDURE deleteNote
    @noteId VARCHAR(100)
AS
BEGIN
    DELETE FROM Notes
    WHERE id = @noteId;
END;
