-- DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  position INT NOT NULL,
  item_ID INT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100)NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (position)
);

SELECT * FROM products;