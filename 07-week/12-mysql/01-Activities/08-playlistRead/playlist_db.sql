DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  artist VARCHAR(60) NOT NULL,
  genre VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre)
VALUES ("Seven Nation Army", "white Stripes", "rock"),
 ("Apple Blossum", "Jack White", "folk"),
 ("Travelin Man", "The Dead South", "folk");
