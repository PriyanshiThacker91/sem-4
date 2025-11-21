-- Create Department Table
CREATE TABLE Department (
 DepartmentID INT PRIMARY KEY,
 DepartmentName VARCHAR(100) NOT NULL UNIQUE
);
-- Create Designation Table
CREATE TABLE Designation (
 DesignationID INT PRIMARY KEY,
 DesignationName VARCHAR(100) NOT NULL UNIQUE
);
-- Create Person Table
CREATE TABLE Person (
 PersonID INT PRIMARY KEY IDENTITY(101,1),
 FirstName VARCHAR(100) NOT NULL,
 LastName VARCHAR(100) NOT NULL,
 Salary DECIMAL(8, 2) NOT NULL,
 JoiningDate DATETIME NOT NULL,
 DepartmentID INT NULL,
 DesignationID INT NULL,
 FOREIGN KEY (DepartmentID) REFERENCES Department(DepartmentID),
 FOREIGN KEY(DesignationID) REFERENCES Designation(DesignationID)
);
select*from Department

--Part – A
--1. Department, Designation & Person Table’s INSERT, UPDATE & DELETE Procedures.
create or alter procedure pr_department_insert
@deptId int,
@deptName varchar(100)
As 
begin
insert into Department(DepartmentID,DepartmentName)
values(@deptId,@deptName)
end 
exec pr_department_insert 1,'Admin'
exec pr_department_insert 2,'IT'
exec pr_department_insert 3,'HR'
exec pr_department_insert 4,'Account'
select*from Department

create or alter procedure pr_designation_insert
@DesignationId int,
@DesignationName varchar(100)
as
begin
insert into Designation(DesignationID,DesignationName)
values(@DesignationId,@DesignationName)
end
exec pr_designation_insert 11,'Jobber'
exec pr_designation_insert 12,'Welder'
exec pr_designation_insert 13,'Clerk'
exec pr_designation_insert 14,'Manager'
exec pr_designation_insert 15,'CEO'
SELECT*FROM Designation

create or alter procedure pr_person_insert
@FirstName varchar(100),
@LastName varchar(50),
@Salary int,
@JoiningDate Datetime,
@DepartmentID int,
@DesignationID int
as
begin
insert into Person
values(@FirstName, 
@LastName, 
@Salary, 
@JoiningDate, 
@DepartmentID, 
@DesignationID)
end
exec pr_person_insert 'Rahul', 'Anshu', 56000, '01-01-1990', 1, 12
exec pr_person_insert 'Hardik', 'Hinsu', 18000,'09-25-1990', 2, 11
exec pr_person_insert 'Bhavin', 'Kamani',25000, '05-14-1991', NULL, 11
exec pr_person_insert 'Bhoomi', 'Patel', 39000, '02-20-2014' ,1 ,13
exec pr_person_insert 'Rohit', 'Rajgor', 17000, '07-23-1990', 2, 15
exec pr_person_insert 'Priya', 'Mehta', 25000, '10-18-1990' ,2, NULL
exec pr_person_insert 'Neha', 'Trivedi', 18000,' 02-20-2014', 3, 15
select*from Person
--2. Department, Designation & Person Table’s SELECTBYPRIMARYKEY
create procedure pr_designation_delete
@designationId int
as
begin
delete from Designation
where DesignationID=@designationId
end
exec pr_designation_delete 11
select*from Designation

create procedure pr_department_delete
@departmentId int
as
begin
delete from Department
where DepartmentId=@departmentId
end

create procedure pr_person_delete
@personId int
as
begin
delete from person
where personId=@personId
end
exec pr_person_delete 102

create procedure pr_person_update
@personId int,
@LastName varchar(50),
@Salary int,
@JoiningDate datetime 
DepartmentID DesignationID
as
begin
update Person
set @FirstName=@FirstName
  
where @personId=@personId
end


--3. Department, Designation & Person Table’s (If foreign key is available then do write join and take
--columns on select list)
--
4. Create a Procedure that shows details of the first 3 persons.