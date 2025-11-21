--AFTER Trigger--

--EmployeeDetails
CREATE TABLE EMPLOYEEDETAILS
(
	EmployeeID Int Primary Key,
	EmployeeName Varchar(100) Not Null,
	ContactNo Varchar(100) Not Null,
	Department Varchar(100) Not Null,
	Salary Decimal(10,2) Not Null,
	JoiningDate DateTime Null
)
--EmployeeLogs--

	CREATE TABLE EmployeeLogs (
    LogID INT PRIMARY KEY IDENTITY(1,1),
    EmployeeID INT NOT NULL,
    EmployeeName VARCHAR(100) NOT NULL,
    ActionPerformed VARCHAR(100) NOT NULL,
    ActionDate DATETIME NOT NULL
);

--1)Create a trigger that fires AFTER INSERT, UPDATE, and DELETE operations on the EmployeeDetails table to display the message "Employee record inserted", "Employee record updated", "Employee record deleted"
CREATE trigger tr_EmployeeDetailsAffected
on EmployeeDetails
after insert
begin
print 'Employee record inserted'
end
insert into EmployeeLogs values(@EmployeeID,@EmployeeName,GETDATE(),'insert')

CREATE trigger tr_EmployeeDetailsAffected
on EmployeeDetails
after update
begin
print 'Employee record updated'
end


CREATE trigger tr_EmployeeDetailsAffected
on EmployeeDetails
after delete
begin
print 'Employee record deleted'
end

--2)Create a trigger that fires AFTER INSERT, UPDATE, and DELETE operations on the EmployeeDetails table to log all operations into the EmployeeLog table.
create or alter trigger tr_logoperations
on EmployeeDetails
after insert
as
begin
declare @EmployeeID int,
@EmployeeName varchar(50)
select @EmployeeID=EmployeeID from inserted
select @EmployeeName=EmployeeName from inserted
insert into EmployeeLogs values(@EmployeeID,@EmployeeName,GETDATE(),'insert')
end
insert into  EmployeeDetails values(1,'priya',987654323,'cse','80000',GETDATE())

select*from EmployeeDetails
select*from EmployeeLogs

create or alter trigger tr_logoperations
on EmployeeDetails
after update
as
begin
declare @EmployeeID int,
@EmployeeName varchar(50)
select @EmployeeID=EmployeeID from inserted
select @EmployeeName=EmployeeName from inserted
insert into EmployeeLogs values(@EmployeeID,@EmployeeName,GETDATE(),'update')
end
insert into  EmployeeDetails values(1,'priya',987654323,'cse','80000',GETDATE())

select*from EmployeeDetails
select*from EmployeeLogs

create or alter trigger tr_logoperations
on EmployeeDetails
after delete
as
begin
declare @EmployeeID int,
@EmployeeName varchar(50)
select @EmployeeID=EmployeeID from deleted
select @EmployeeName=EmployeeName from deleted
insert into EmployeeLogs values(@EmployeeID,@EmployeeName,GETDATE(),'delete')
end
insert into on EmployeeDetails values(1,'priya',987654323,'cse','80000',GETDATE())

select*from EmployeeDetails
select*from EmployeeLogs

--3)Create a trigger that fires AFTER INSERT to automatically calculate the joining bonus (10% of the salary) for new employees and update a bonus column in the EmployeeDetails table.
create or alter trigger tr_update
on EmployeeDetails
after insert 
as
begin
declare @joindate datetime,@employeeId int
select @employeeId=employeeId, @JoiningDate=JoiningDate from inserted
if @JoiningDate is null
begin
update EmployeeDetails
set JoiningDate=GETDATE()
where @employeeId=employeeId
end
end

--4)Create a trigger to ensure that the JoiningDate is automatically set to the current date if it is NULL during an INSERT operation.
create or alter trigger tr_automatically_update
on EmployeeDetails
after insert 
as
begin
declare @joindate datetime,@employeeId int
select @employeeId=employeeId, @JoiningDate=JoiningDate from inserted
if @JoiningDate is null
begin
update EmployeeDetails
set JoiningDate=GETDATE()
where @employeeId=employeeId
end
end
--5)Create a trigger that ensure that ContactNo is valid during insert and update (Like ContactNo length is 10)
create or alter trigger tr_contact
on EmployeeDetails
after insert,update
as
begin
declare @joiningDate datetime,@employeeId int
select @employeeId=employeeId,@contactno=contactno from inserted
if len(@contactno)!=10
as
begin
delete @contactno=contactno
end
end



--Instead of Trigger

CREATE TABLE Movies (
    MovieID INT PRIMARY KEY,
    MovieTitle VARCHAR(255) NOT NULL,
    ReleaseYear INT NOT NULL,
    Genre VARCHAR(100) NOT NULL,
    Rating DECIMAL(3, 1) NOT NULL,
    Duration INT NOT NULL
);


CREATE TABLE MoviesLog
(
	LogID INT PRIMARY KEY IDENTITY(1,1),
	MovieID INT NOT NULL,
	MovieTitle VARCHAR(255) NOT NULL,
	ActionPerformed VARCHAR(100) NOT NULL,
	ActionDate	DATETIME  NOT NULL
);


--1.Create an INSTEAD OF trigger that fires on INSERT, UPDATE and DELETE operation on the Movies table. For that, log all operations performed on the Movies table into MoviesLog.
create or alter trigger tr_logoperations
on Movies
after insert
as
begin
declare @MovieID int,
@MovieTitle varchar(50)
select @MovieID=MovieID from inserted
select @MovieTitle=MovieTitle from inserted
insert into MoviesLog values(@MovieID,@MovieTitle,GETDATE(),'insert')
end
insert into  Movies values(1,'priya',987654323,'cse','80000',GETDATE())

select*from Movies
select*from MoviesLog

create or alter trigger tr_logoperations
on EmployeeDetails
after update
as
begin
declare @EmployeeID int,
@EmployeeName varchar(50)
select @EmployeeID=EmployeeID from inserted
select @EmployeeName=EmployeeName from inserted
insert into EmployeeLogs values(@EmployeeID,@EmployeeName,GETDATE(),'update')
end
insert into  EmployeeDetails values(1,'priya',987654323,'cse','80000',GETDATE())

select*from EmployeeDetails
select*from EmployeeLogs

create or alter trigger tr_logoperations
on EmployeeDetails
after delete
as
begin
declare @EmployeeID int,
@EmployeeName varchar(50)
select @EmployeeID=EmployeeID from deleted
select @EmployeeName=EmployeeName from deleted
insert into EmployeeLogs values(@EmployeeID,@EmployeeName,GETDATE(),'delete')
end
insert into on EmployeeDetails values(1,'priya',987654323,'cse','80000',GETDATE())

select*from EmployeeDetails
select*from EmployeeLogs
--2.Create a trigger that only allows to insert movies for which Rating is greater than 5.5 .

--3.Create trigger that prevent duplicate 'MovieTitle' of Movies table and log details of it in MoviesLog table.

--4.Create trigger that prevents to insert pre-release movies.

--5.Develop a trigger to ensure that the Duration of a movie cannot be updated to a value greater than 120 minutes (2 hours) to prevent unrealistic entries.
