-- USE NotesDB;



CREATE OR ALTER PROCEDURE addNewNote
    @id VARCHAR(100),
    @title VARCHAR(200),
    @content VARCHAR(300),
    @createdAt TIME
AS
BEGIN
    INSERT INTO Notes (id, title, content, createdAt)
    VALUES (@id, @title, @content, @createdAt);
END;
