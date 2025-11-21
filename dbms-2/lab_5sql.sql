-- Creating PersonInfo Table
CREATE TABLE PersonInfo (
 PersonID INT PRIMARY KEY,
 PersonName VARCHAR(100) NOT NULL,
 Salary DECIMAL(8,2) NOT NULL,
 JoiningDate DATETIME NULL,
 City VARCHAR(100) NOT NULL,
 Age INT NULL,
 BirthDate DATETIME NOT NULL
);
-- Creating PersonLog Table
CREATE TABLE PersonLog (
 PLogID INT PRIMARY KEY IDENTITY(1,1),
 PersonID INT NOT NULL,
 PersonName VARCHAR(250) NOT NULL,
 Operation VARCHAR(50) NOT NULL,
 UpdateDate DATETIME NOT NULL,
 --FOREIGN KEY (PersonID) REFERENCES PersonInfo(PersonID) ON DELETE CASCADE
);

--Part – A
--1. Create a trigger that fires on INSERT, UPDATE and DELETE operation on the PersonInfo table to display
--a message “Record is Affected.”

CREATE trigger tr_personinfoAffected
on PersonInfo
after insert,update,delete
as 
begin
print 'record is affected'
end
--2. Create a trigger that fires on INSERT, UPDATE and DELETE operation on the PersonInfo table. For that,
--log all operations performed on the person table into PersonLog
create or alter trigger tr_logoperations
on PersonInfo
after insert
as
begin
declare @PersonID int,
@PersonName varchar(50)
select @PersonID=PersonId from inserted
select @PersonName=PersonName from inserted
insert into PersonLog values(@PersonID,@PersonName,GETDATE(),'insert')
end
insert into PersonInfo values(1,'priya',50000,GETDATE(),'rajkot',18,'2005-12-24')

select*from PersonInfo
select*from PersonLog

create or alter trigger tr_logoperations
on PersonInfo
after update
as
begin
declare @PersonID int,
@PersonName varchar(50)
select @PersonID=PersonId from inserted
select @PersonName=PersonName from inserted
insert into PersonLog values(@PersonID,@PersonName,GETDATE(),'update')
end

create or alter trigger tr_logoperations
on PersonInfo
after delete
as
begin
declare @PersonID int,
@PersonName varchar(50)
select @PersonID=PersonId from deleted
select @PersonName=PersonName from deleted
insert into PersonLog values(@PersonID,@PersonName,GETDATE(),'delete')
end

--4. Create a trigger that fires on INSERT operation on the PersonInfo table to convert person name into
--uppercase whenever the record is inserted.
CREATE TRIGGER trg_UpperCasePersonName
ON PersonInfo
AFTER INSERT
as
BEGIN
     declare @PersonId int,
	 @PersonName varchar(50)
select @PersonID=PersonId from inserted
select @PersonName=PersonName from inserted
   UPDATE PersonInfo
    SET PersonName=UPPER(@PersonName)
    WHERE @PersonID=PersonID
END

--3. Create an INSTEAD OF trigger that fires on INSERT, UPDATE and DELETE operation on the PersonInfo
--table. For that, log all operations performed on the person table into PersonLog.
create trigger tr_person_insteadof_insert
on PersonInfo
instead of insert
as
begin
declare @PersonId int;
declare @PersonName varchar(100);

select @PersonId=PersonId from inserted
select @PersonName=PersonName from inserted

insert into PersonLog values(@PersonId,@PersonName,'insert',GETDATE());
end

create trigger tr_person_insteadof_update
on PersonInfo
instead of update
as
begin
declare @PersonId int;
declare @PersonName varchar(100);

select @PersonId=PersonId from inserted
select @PersonName=PersonName from inserted

insert into PersonLog values(@PersonId,@PersonName,'update',GETDATE());
end

create trigger tr_person_insteadof_delete
on PersonInfo
instead of delete
as
begin
declare @PersonId int;
declare @PersonName varchar(100);

select @PersonId=PersonId from deleted
select @PersonName=PersonName from deleted

insert into PersonLog values(@PersonId,@PersonName,'delete',GETDATE());
end

--5. Create trigger that prevent duplicate entries of person name on PersonInfo table.
create trigger tr_person_insteadof_insert
on PersonInfo
instead of insert
as
begin
declare @PersonId int;
declare @PersonName varchar(100);

select distinct @PersonId=PersonId from inserted
select distinct @PersonName=PersonName from inserted

insert into PersonLog values(@PersonId,@PersonName,'insert',GETDATE());
end
--6. Create trigger that prevent Age below 18 years
create trigger tr_person_insteadof_insert
on PersonInfo
instead of insert
as
begin
declare @PersonId int;
declare @PersonName varchar(100);

select @PersonId=PersonId from inserted
select @PersonName=PersonName from inserted

insert into PersonLog values(@PersonId,@PersonName,'insert',GETDATE());
end



---Part – B
--7. Create a trigger that fires on INSERT operation on person table, which calculates the age and update
--that age in Person table.
create or alter trigger TR_insert_calculate_age
on PersonInfo
instead of insert
as
begin
	declare @personid int;
	declare @Birthdate dateTime;
	declare @age int;
	select @personid=PersonId,@age=age,@Birthdate=BirthDate from inserted	
	update Personinfo
	set age=Datediff(year,@Birthdate,getdate())
	where PersonId=@personid
end



--8. Create a Trigger to Limit Salary Decrease by a 10%.
create or alter trigger tr_salary_dec
on personInfo
after update 
as
begin
declare @OldSalary decimal(8,2),@NewSalary decimal(8,2);
declare @PersonId int
select @NewSalary=i.Salary,@PersonId=i.PersonId
from inserted i
select @OldSalary=d.Salary from deleted d
if @NewSalary<@OldSalary*0.9
begin
update PersonInfo
set Salary=@OldSalary
where PersonID=@PersonId
end
end

--Part – C
--9. Create Trigger to Automatically Update JoiningDate to Current Date on INSERT if JoiningDate is NULL
--during an INSERT.
create or alter trigger tr_salary_dec
on personInfo
after insert 
as
begin
declare @joindate datetime,@personId int
select @personId=personId, @joiningDate=joiningDate from inserted
if @joiningDate is null
begin
update PersonInfo
set JoiningDate=GETDATE()
where @PersonId=PersonID
end
end

--10. Create DELETE trigger on PersonLog table, when we delete any record of PersonLog table it prints
--Record deleted successfully from PersonLog’
select * from PersonLog
create or alter trigger TR_delete_personLog
on PersonLog
after delete
as
begin	
	print('‘Record deleted successfully from PersonLog’')
end
delete from PersonLog where PLogID=1