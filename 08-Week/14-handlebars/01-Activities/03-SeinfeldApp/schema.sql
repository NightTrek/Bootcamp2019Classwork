DROP DATABASE IF EXISTS seinfeld_db;
CREATE database seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  coolness_points INTEGER(12) NOT NULL,
  attitude VARCHAR(45),
  PRIMARY KEY (id)
);

INSERT INTO products (name, coolness_points, attitude)
VALUES("Sun Glasses", "appearel", 10.99, 42),
("Hat", "appearel", 14.99, 31),
("boots", "appearel", 99.99, 68);

SELECT * FROM actors;
