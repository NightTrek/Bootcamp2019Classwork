DROP DATABASE IF EXISTS moviePlanner_db;

CREATE DATABASE moviePlanner_db;

USE moviePlanner_db;

CREATE TABLE movies(
    id INTEGER AUTO_INCREMENT,
    movieName VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
)

