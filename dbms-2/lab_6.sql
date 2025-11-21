-- Create the Products table
CREATE TABLE Products (
 Product_id INT PRIMARY KEY,
 Product_Name VARCHAR(250) NOT NULL,
 Price DECIMAL(10, 2) NOT NULL
);
-- Insert data into the Products table
INSERT INTO Products (Product_id, Product_Name, Price) VALUES
(1, 'Smartphone', 35000),
(2, 'Laptop', 65000),
(3, 'Headphones', 5500),
(4, 'Television', 85000),
(5, 'Gaming Console', 32000);

--Part - A
--1. Create a cursor Product_Cursor to fetch all the rows from a products table.
declare @Product_id int,@Product_Name varchar(250),@Price decimal(10,2)
declare Product_cursor cursor
for 
select
Product_id,Product_Name,Price
from
Products
open Product_cursor
fetch next from  Product_cursor into 
@Product_id,@Product_Name,@Price
while @@FETCH_STATUS=0
begin
print cast(@product_id as varchar(250))+'-'+@Product_Name+'-'+cast(@Price as varchar(10))
fetch next from  Product_cursor into 
@Product_id,@Product_Name,@Price
end;
close Product_cursor;
deallocate Product_cursor;

--2. Create a cursor Product_Cursor_Fetch to fetch the records in form of ProductID_ProductName.
--(Example: 1_Smartphone)
declare @Product_id int,@Product_Name varchar(250)
declare Product_cursor_fetch cursor
for 
select
Product_id,Product_Name
from
Products
open Product_cursor_fetch
fetch next from  Product_cursor_fetch into 
@Product_id,@Product_Name
while @@FETCH_STATUS=0
begin
print cast(@product_id as varchar(250))+'_'+@Product_Name
fetch next from  Product_cursor_fetch into 
@Product_id,@Product_Name
end;
close Product_cursor_fetch;
deallocate Product_cursor_fetch;

--3. Create a Cursor to Find and Display Products Above Price 30,000.
declare @Product_id int,@Product_Name varchar(250),@Price decimal(10,2)
declare Product_cursor_filter cursor
for 
select
Product_id,Product_Name,Price 
from
Products
where Price>30000
open Product_cursor_filter
fetch next from  Product_cursor_filter into 
@Product_id,@Product_Name,@Price
while @@FETCH_STATUS=0
begin

print cast(@product_id as varchar(250))+'-'+@Product_Name+'-'+cast(@Price as varchar(10))
fetch next from  Product_cursor_filter into 
@Product_id,@Product_Name,@Price
end;
close Product_cursor_filter;
deallocate Product_cursor_filter;

--4. Create a cursor Product_CursorDelete that deletes all the data from the Products table.
DECLARE @Product_id INT;
DECLARE Product_CursorDelete CURSOR FOR
SELECT Product_id
FROM Products;

OPEN Product_CursorDelete;

FETCH NEXT FROM Product_CursorDelete INTO @Product_id;

WHILE @@FETCH_STATUS = 0
BEGIN
    DELETE FROM Products WHERE Product_id = @Product_id;

    FETCH NEXT FROM Product_CursorDelete INTO @Product_id;
END;

CLOSE Product_CursorDelete;
DEALLOCATE Product_CursorDelete;
select*from Products


--Part – B
--5. Create a cursor Product_CursorUpdate that retrieves all the data from the products table and increases
--the price by 10%.
DECLARE Product_CursorUpdate CURSOR FOR
SELECT Product_id, Price
FROM Products;
DECLARE @Product_id INT;
DECLARE @Price DECIMAL(10, 2);
OPEN Product_CursorUpdate;
FETCH NEXT FROM Product_CursorUpdate INTO @Product_id, @Price;
WHILE @@FETCH_STATUS = 0
BEGIN
    UPDATE Products
    SET Price = @Price+@Price*0.01
    WHERE Product_id = @Product_id;
    FETCH NEXT FROM Product_CursorUpdate INTO @Product_id, @Price;
END;

CLOSE Product_CursorUpdate;
DEALLOCATE Product_CursorUpdate;
select*from Products

--6. Create a Cursor to Rounds the price of each product to the nearest whole number.
DECLARE Product_CursorRound CURSOR FOR
SELECT Product_id, Price
FROM Products;

DECLARE @Product_id INT;
DECLARE @Price DECIMAL(18, 2);

OPEN Product_CursorRound;
FETCH NEXT FROM Product_CursorRound INTO @Product_id, @Price;
WHILE @@FETCH_STATUS = 0
BEGIN
    UPDATE Products
    SET Price = ROUND(@Price, 0)
    WHERE Product_id = @Product_id;

    FETCH NEXT FROM Product_CursorRound INTO @Product_id, @Price;
END;

CLOSE Product_CursorRound;
DEALLOCATE Product_CursorRound;
select*from Products

--Part – C
--7. Create a cursor to insert details of Products into the NewProducts table if the product is “Laptop”
--(Note: Create NewProducts table first with same fields as Products table)
--8. Create a Cursor to Archive High-Price Products in a New Table (ArchivedProducts), Moves products
--with a price above 50000 to an archive table, removing them from the original Products table.