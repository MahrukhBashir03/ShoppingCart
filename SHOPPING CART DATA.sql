CREATE DATABASE ShoppingCart
USE ShoppingCart;

CREATE TABLE Products(
ProductID INT PRIMARY KEY IDENTITY,
Name VARCHAR(100),
Price DECIMAL(10,2),
Stock INT
);

CREATE TABLE ShoppingCart(
CartID INT PRIMARY KEY IDENTITY,
UserID INT,
TotalAmount DECIMAL(10,2)
);

CREATE TABLE CartItems(
CartID INT PRIMARY KEY IDENTITY,
ProductID INT,
Quantity INT,
SubTotal DECIMAL(10,2),
FOREIGN KEY(CartID) REFERENCES ShoppingCart(CartID),
FOREIGN KEY(ProductID) REFERENCES Products(ProductID)
);

INSERT INTO Products (ProductID, Name, Price, Stock)
VALUES 
(1,'Laptop', 899.99, 50),
(2,'Smartphone', 599.99, 100),
(3,'Headphones', 89.99, 150),
(4,'Keyboard', 49.99, 200),
(5,'Monitor', 299.99, 80);


INSERT INTO ShoppingCart (UserID, TotalAmount)
VALUES (1, 0.00);  


INSERT INTO CartItems (CartID, ProductID, Quantity, SubTotal)
VALUES
(1, 1, 1, 899.99),  -- 1 Laptop
(1, 3, 2, 179.98),  -- 2 Headphones
(1, 4, 1, 49.99);   -- 1 Keyboard


UPDATE ShoppingCart
SET TotalAmount = (SELECT SUM(SubTotal) FROM CartItems WHERE CartID = 1)
WHERE CartID = 1;


