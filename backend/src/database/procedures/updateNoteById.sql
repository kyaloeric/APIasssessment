-- USE NotesDB;

CREATE OR ALTER PROCEDURE updateNote
    @noteId VARCHAR(100),
    @title VARCHAR(200),
    @content VARCHAR(300),
    @createdAt TIME
AS
BEGIN
    UPDATE Notes
    SET title = @title, content = @content, createdAt = @createdAt
    WHERE id = @noteId;
END;
