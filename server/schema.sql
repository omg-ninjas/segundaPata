DROP DATABASE IF EXISTS segundaPata;

CREATE DATABASE segundaPata;

USE segundaPata;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  description varchar(50) NOT NULL,
  price varchar(50) NOT NULL,
  category varchar(50) NOT NULL,
  subcategory varchar(50) NOT NULL,
  comments varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/schema.sql
 *  to create the database and the tables.*/

INSERT INTO items (name, description, price, category, subcategory, comments) VALUES ("hueso mordido", "tamaño 8 pulgadas", "$10.00", "jugete", "para dientes", "todavia le queda %40");
INSERT INTO items (name, description, price, category, subcategory, comments) VALUES ("camita", "tamaño 20 pulgadas", "$30.00", "jugete", "color cafe", "tengo un cuadro como cama");
INSERT INTO items (name, description, price, category, subcategory, comments) VALUES ("calsetas", "tamaño grande", "$10.00", "jugete", "abrigar", "son color moradas");
INSERT INTO items (name, description, price, category, subcategory, comments) VALUES ("comida pedegri", "bolsa tamaño 400 oz", "$50.00", "jugete", "dieta especial", "esta nueva la bolsa");
INSERT INTO items (name, description, price, category, subcategory, comments) VALUES ("zapato viejo", "nike", "$10.00", "jugete", "para dientes", "es un zapato negro con goma al cien");
INSERT INTO items (name, description, price, category, subcategory, comments) VALUES ("sueter", "tamaño Chihuahua", "$25.00", "jugete", "color negro", "tenemos dos disponible");
