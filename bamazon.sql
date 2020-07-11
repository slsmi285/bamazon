-- drop db if exists, create db --
DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

-- use bamazon db --
USE bamazon_db;

-- create products table --
CREATE TABLE  products (
    item_id INT AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL, 
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT NOT NULL,
    product_sales DECIMAL(10,2) DEFAULT 0,
    PRIMARY KEY (item_id)
);

-- default product values -- 
-- populating base product sales data assuming past sales have occured so that profitibility won't be all deeply negative --
INSERT INTO products (product_name, department_name, price, stock_quantity, product_sales)
VALUES ("Troubadour by George Strait - Vinyl", "Music", 19.99, 40, 1100), ("Avatar", "Movies", 19.99, 35, 2350), 
			 ("Lenovo Yoga 900 Laptop", "Electronics", 949.99, 4, 3500), ("Yoyo's", "Toys", 9.99, 100, 1480), 
			 ("Pillows", "Household", 14.99, 75, 1648.28), ("North Face Jacket", "Clothes", 89.99, 50, 2380), 
       ("Set of Snap On Wrenches", "Hardware", 29.99, 300, 1200), ("Soccer Net", "Sports Equipment", 149.99, 3, 2300), 
       ("Xbox One X", "Electronics", 299.99, 25, 8000), ("Piano Man by Billy Joel - Vinyl", "Music", 19.99, 17, 1100);

-- create department table --
CREATE TABLE deparments (
    department_id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    over_head_costs DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (department_id)
);

-- default table values --
INSERT INTO deparments (department_name, over_head_costs)
VALUES ("Music", 2000), ("Movies", 2000), ("Electronics", 10000), ("Toys", 2000), ("Household", 1000), ("Clothes", 1000), ("Hardware", 500),
("Sports Equipment", 1300);

 -- view tables --
SELECT * FROM products;
SELECT * FROM departments;            
