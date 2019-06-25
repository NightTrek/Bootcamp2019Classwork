DROP DATABASE IF EXISTS top_songs_db;

CREATE DATABASE top_songs_db;

USE top_songs_db;

CREATE TABLE songs
(
    id INT NOT NULL
    AUTO_INCREMENT,
  artist VARCHAR
    (80) NOT NULL,
  songName VARCHAR
    (80) NOT NULL,
  releaseYear INTEGER
    (10) NOT NULL,
  USA FLOAT NOT NULL,
  UK FLOAT NOT NULL,
  EU FLOAT NOT NULL,
  SouthAmerica Float NOT NULL,
  world FLOAT NOT NULL,
  PRIMARY KEY
    (id)
);

    INSERT INTO songs
        (artist, songName, releaseYear, USA, UK, EU, World)
    VALUES
        ("Bing Crosby", "White Christmas", "1942", 39.903, 23.929,5.7,2.185,0.54);
