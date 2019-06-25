DROP DATABASE IF EXISTS greatBay_db;

CREATE DATABASE greatBay_db;

USE greatBay_db;


 CREATE TABLE items (
  id INT NOT NULL AUTO_INCREMENT,
  itemName VARCHAR(45) NOT NULL,
  startingBid INTEGER NOT NULL,
  currentBid INTEGER NOT NULL,
  currentBidder INTEGER NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO items (itemName, startingBid, currentBid, currentBidder)
VALUES ("gaming Computer", 5, 5,1),
("laptop", 10, 10,2);

 CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NOT NULL,
  itemsForSale VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users(username,itemsForSale)
VALUES ("daniel",1),
("denzel", 2);
