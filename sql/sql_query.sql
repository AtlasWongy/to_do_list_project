SHOW DATABASES;
USE todolistdatabase;
SHOW TABLES;
DROP TABLE product;

CREATE TABLE Tasks (
	ID int NOT NULL auto_increment,
    Description varchar(255) NOT NULL,
    Deadline date NOT NULL,
    Assignee varchar(255) NOT NULL,
    Assignor varchar(255) NOT NULL,
    Completed bool NOT NULL,
    PRIMARY KEY (ID)
);

INSERT INTO Tasks (Description, Deadline, Assignee, Assignor, Completed)
VALUES ("Implement System Design", "2023-06-01", "Adam", "Bernard", false);

SELECT * FROM Tasks



