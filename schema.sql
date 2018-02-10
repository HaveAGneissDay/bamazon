DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_ID INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100)NULL,
  price DECIMAL(10,2) NULL,
  quantity INT(200) NULL,
  PRIMARY KEY (item_ID)
);

