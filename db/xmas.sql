DROP DATABASE IF EXISTS ChristmasList;

CREATE DATABASE ChristmasList;

USE ChristmasList;

CREATE TABLE presents (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50),
);
