--Lab-7--

-- Create the Customers table
CREATE TABLE Customers (
 Customer_id INT PRIMARY KEY,
 Customer_Name VARCHAR(250) NOT NULL,
 Email VARCHAR(50) UNIQUE
);
-- Create the Orders table
CREATE TABLE Orders (
 Order_id INT PRIMARY KEY,
 Customer_id INT,
 Order_date DATE NOT NULL,
 FOREIGN KEY (Customer_id) REFERENCES Customers(Customer_id)
);
select*from Customers
select* from Orders

--Part – A

--1. Handle Divide by Zero Error and Print message like: Error occurs that is - Divide by zero error.
begin try
declare @num1 int,@num2 int,@result int
set @num1=20
set @num2=0
set @result=@num1/@num2
print @result
end try
begin catch
print 'Error occurs that is - Divide by zero error'
print 'error number:'+cast(error_number() as varchar(10));
print 'error severity:'+cast(error_severity() as varchar(10));
print 'error state:'+cast(error_state() as varchar(10));
print 'error message:'+ error_message();
end catch


--2. Try to convert string to integer and handle the error using try…catch block.
begin try
declare @str varchar(50),@intvalue int='12';
set @intvalue=cast(@str as int)
end try
begin catch
print 'Error occurs that is - cannot convert into int'
print 'error number:'+cast(error_number() as varchar(10));
print 'error severity:'+cast(error_severity() as varchar(10));
print 'error state:'+cast(error_state() as varchar(10));
print 'error message:'+ error_message();
end catch

--3. Create a procedure that prints the sum of two numbers: take both numbers as integer & handle
--exception with all error functions if any one enters string value in numbers otherwise print result.
create or alter proc pr_sum_of_two_no
@num1 int,@num2 int
as
begin
print 'sum is:'+ cast(@num1+@num2 as varchar(50));
end;
begin try
exec pr_sum_of_two_no '2','3'
--if here we give any string for example 2,'ab' then it give error otherwise our ans will be 5.--
end try

begin catch
print 'Error occurs that is - cannot convert into int'
print 'error number:'+cast(error_number() as varchar(10));
print 'error severity:'+cast(error_severity() as varchar(10));
print 'error state:'+cast(error_state() as varchar(10));
print 'error message:'+ error_message();
end catch



--4. Handle a Primary Key Violation while inserting data into customers table and print the error details
--such as the error message, error number, severity, and state.

begin try
   insert into Customers values(4,'priyanshi','priyanshi@gmail.com')
end try
   

 begin catch 
 print 'error number:'+cast(error_number() as varchar(10));
print 'error severity:'+cast(error_severity() as varchar(10));
print 'error state:'+cast(error_state() as varchar(10));
print 'error message:'+ error_message();
end catch


--5. Throw custom exception using stored procedure which accepts Customer_id as input & that throws
--Error like no Customer_id is available in database.
create or alter proc pr_custom_exception_handling
@Customer_id int
as
begin
if not exists(select Customer_id from Customers where Customer_id=@customer_id)
begin
throw 50001,'no Customer_id is available in database',1;
end
else
begin
print 'customer_id exists';
end
end
exec pr_custom_exception_handling 3
select*from Customers

--Part – B
--6. Handle a Foreign Key Violation while inserting data into Orders table and print appropriate error
--message.

--7. Throw custom exception that throws error if the data is invalid.
create or alter proc pr_custom_exception_handling
@Customer_Name varchar(50)
as
begin
if not exists(select Customer_Name from Customers where Customer_Name=@Customer_Name)
begin
throw 50002,'the data is invalid',1;
end
else
begin
print 'Customer_Name exists';
end
end
exec pr_custom_exception_handling 'kjhg'
--8. Create a Procedure to Update Customer’s Email with Error Handling