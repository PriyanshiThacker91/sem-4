--Note: for Table valued function use tables of Lab-2
--Part – A
--1. Write a function to print "hello world".
create or alter function fn_helloworld()
returns varchar(50)
as 
begin
return 'hello world'
end
select dbo.fn_helloworld()
--2. Write a function which returns addition of two numbers.
create or alter function fn_add(@n1 int,@n2 int)
returns int
as
begin
declare @sum int
set @sum=@n1+@n2
return @sum
end
select dbo.fn_add(10,20) as addition
--3. Write a function to check whether the given number is ODD or EVEN.
create or alter function fn_even_odd(@num int)
returns varchar(20)
as
begin
declare @msg varchar(50)
if @num%2=0
set @msg='even no.'
else
set @msg='odd no'
return @msg
end 
select dbo.fn_even_odd(9) as even_or_odd
--4. Write a function which returns a table with details of a person whose first name starts with B.
create or alter function fn_personDetail()
retuns @temp table(FirstName varchar(50),
LastName varchar(50))
as
begin
select FirstName,LastName from Person where FirstName like 'B%'
return
end

select*from dbo.fn_personDetail()
select*from Person
--5. Write a function which returns a table with unique first names from the person table.
--6. Write a function to print number from 1 to N. (Using while loop)
create or alter function fn_1ton(@no int)
returns varchar(200)
as
begin
declare @msg varchar(200),@count int
set @msg=''
set @count=1
while(@count<=@no)
begin
set @msg=@msg+''+cast(@count as varchar)
set @count=@count+1
end
return @msg
end
select dbo.fn_1ton(10)
--7. Write a function to find the factorial of a given integer.
create or alter function fn_factorial(@no int)
returns int
as
begin
  declare @result int,@num int=1
  set @result=1
  while(@num<=@no)
  begin
  set @result=@result*@num
  set @num=@num+1
  end
  return @result
  end
  select dbo.fn_factorial(5)
--Part – B
--8. Write a function to compare two integers and return the comparison result. (Using Case statement)
create or alter function fn_compare_integers(@num1 int, @num2 int)
returns varchar(20)
as
begin
return case
when @num1>@num2 then 'first is greater'
when @num1<@num2 then 'second is greater'
else 'both are equal'
end
end
select dbo.fn_compare_integers(2,4)
--9. Write a function to print the sum of even numbers between 1 to 20.
create or alter function fn_1to20Add()
returns int
as
begin
declare @count int,@sum int
set @count=1
set @sum=0
while(@count<=20)
begin
if(@count%2=0)
set @sum=@sum+@count
set @count=@count+1
end
return @sum
end
select dbo.fn_1to20Add()
--10. Write a function that checks if a given string is a palindrome
--Part – C
--11. Write a function to check whether a given number is prime or not.
--12. Write a function which accepts two parameters start date & end date, and returns a difference in days.
--13. Write a function which accepts two parameters year & month in integer and returns total days each
--year.
--14. Write a function which accepts departmentID as a parameter & returns a detail of the persons.
--15. Write a function that returns a table with details of all persons who joined after 1-1-1991.