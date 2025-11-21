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
);

drop table PersonInfo
drop table PersonLog
--Part – A
--1. Create a trigger that fires on INSERT, UPDATE and DELETE operation on the PersonInfo table 
--to display a message “Record is Affected.”

	create TRIGGER tr_Display_Msg
	on PersonInfo
	after insert, update, delete
	as
	begin
		print('Record is Affected')
	end
	--insert
	insert into PersonInfo values(1,'twinkal',20000,'2020-02-01','rajkot',20,'2005-02-01')
	--update
	update PersonInfo
	set PersonName='Twinkle'
	where PersonID=1
	--delete
	delete from PersonInfo where PersonID=1
	select * from PersonInfo
	drop trigger tr_Display_Msg
--2. Create a trigger that fires on INSERT, UPDATE and DELETE operation on the PersonInfo table.
--For that, log all operations performed on the person table into PersonLog.
	create TRIGGER tr_PersonLog_Insert
	on PersonInfo
	after insert
	as
	begin
		declare @PersonId int;
		declare @PersonName varchar(50);

		select @PersonId=PersonId from inserted
		select @PersonName=PersonName from inserted

		insert into PersonLog (PersonID,PersonName, Operation,UpdateDate) 
		values(@PersonId,@PersonName,'Insert',GETDATE())
	end
	--insert
	insert into PersonInfo values(2,'twinkal',20000,'2020-02-01','rajkot',20,'2005-02-01')
	insert into PersonInfo values(3,'riya',20000,'2020-02-01','rajkot',20,'2005-02-01')
	select * from PersonLog

	drop trigger tr_PersonLog_Insert
	--update
	create TRIGGER tr_PersonLog_update
	on PersonInfo
	after update
	as
	begin
		declare @PersonId int;
		declare @PersonName varchar(50);

		select @PersonId=PersonId from inserted
		select @PersonName=PersonName from inserted

		insert into PersonLog (PersonID,PersonName, Operation,UpdateDate) 
		values(@PersonId,@PersonName,'update',GETDATE())
	end
	update PersonInfo
	set PersonName='Twinkle'
	where PersonID=1
	drop trigger tr_PersonLog_update
	--delete
	create or alter TRIGGER tr_PersonLog_delete
	on PersonInfo
	after delete
	as
	begin
		declare @PersonId int;
		declare @PersonName varchar(50);

		select @PersonId=PersonId from deleted
		select @PersonName=PersonName from deleted

		insert into PersonLog (PersonID,PersonName, Operation,UpdateDate) 
		values(@PersonId,@PersonName,'delete',GETDATE())
	end

	delete from PersonInfo where PersonID=1

	select * from PersonLog
	drop trigger tr_PersonLog_delete
--3. Create an INSTEAD OF trigger that fires on INSERT, UPDATE and DELETE operation on the PersonInfo table.
--For that, log all operations performed on the person table into PersonLog.
	create or alter TRIGGER TR_insted_of_insert
	on PersonInfo
	instead of insert
	as
	begin
		declare @PersonId int;
		declare @PersonName varchar(50);

		select @PersonId=PersonId from inserted
		select @PersonName=PersonName from inserted

		insert into PersonLog (PersonID,PersonName, Operation,UpdateDate) 
		values(@PersonId,@PersonName,'try for insert',GETDATE())
	end
	drop trigger TR_insted_of_insert
	--insert
	insert into PersonInfo values(1,'twinkal',20000,'2020-02-01','rajkot',20,'2005-02-01')

	--update
	create or alter TRIGGER TR_insted_of_update
	on PersonInfo
	instead of update
	as
	begin
		declare @PersonId int;
		declare @PersonName varchar(50);

		select @PersonId=PersonId from inserted
		select @PersonName=PersonName from inserted

		insert into PersonLog (PersonID,PersonName, Operation,UpdateDate) 
		values(@PersonId,@PersonName,'try for upadte',GETDATE())
	end
	select * from PersonLog
	select * from PersonInfo
	update PersonInfo
	set PersonName='Twinkle'
	where PersonID=1
	drop trigger TR_insted_of_update
	--delete
	create or alter TRIGGER TR_insted_of_delete
	on PersonInfo
	instead of delete
	as
	begin
		declare @PersonId int;
		declare @PersonName varchar(50);

		select @PersonId=PersonId from deleted
		select @PersonName=PersonName from deleted

		insert into PersonLog (PersonID,PersonName, Operation,UpdateDate) 
		values(@PersonId,@PersonName,'try for delete',GETDATE())
	end
	select * from PersonLog
	select * from PersonInfo
	delete from PersonInfo where PersonID=1
	drop trigger TR_insted_of_delete
--4. Create a trigger that fires on INSERT operation on the PersonInfo table to convert person name into uppercase whenever the record is inserted.
	create or alter trigger tr_UpperCase
	on PersonInfo
	after insert
	as
	begin 
		declare @PersonId int;
		declare @PersonName varchar(50);

		select @PersonId=PersonId from inserted
		select @PersonName=PersonName from inserted 

		update PersonInfo
		set PersonName=upper(@PersonName)
		where PersonID=@PersonId
	end
insert into PersonInfo values(22,'twinkal',20000,'2020-02-01','rajkot',20,'2005-02-01')
insert into PersonInfo values(200,'isha',21000,'2020-02-01','rajkot',21,'2005-02-01')
insert into PersonInfo values(201,'isha',21000,'2020-02-01','rajkot',21,'2005-02-01')

select * from PersonLog
select * from PersonInfo

--5. Create trigger that prevent duplicate entries of person name on PersonInfo table.
	create trigger tr_preventduplicate
	on PersonInfo
	instead of Insert
	as
	begin
		insert into PersonInfo(PersonId,PersonName,Salary,JoiningDate,City,age,BirthDate)
		select PersonId,PersonName,Salary,JoiningDate,City,age,BirthDate from inserted
		where PersonName not in (select PersonName from PersonInfo)
	end
	insert into PersonInfo(211,'isha',21000,'2020-02-01','rajkot',20,'2005-02-01')
	drop trigger tr_preventduplicate

--6. Create trigger that prevent Age below 18 years.
create or alter trigger TR_prevent_below_18
on PersonInfo
instead of insert
as
begin
	insert into PersonInfo(PersonId,PersonName,Salary,JoiningDate,City,age,BirthDate)
		select PersonId,PersonName,Salary,JoiningDate,City,age,BirthDate from inserted
		where age>18
end
insert into PersonInfo values(25,'twinkal',20000,'2020-02-01','rajkot',12,'2005-02-01')
insert into PersonInfo values(23,'twinkal',20000,'2020-02-01','rajkot',22,'2005-02-01')
drop trigger TR_prevent_below_18
--Part – B
--7. Create a trigger that fires on INSERT operation on person table, which calculates the age and update that age in Person table.
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
create trigger TR_decrease_salary
after update
begin
	declare @salary int;
	declare @OldSalary int;
	if @salary<@OldSalary*0.9

	update personInfo
	set @Salary=Salary-Salary*0.1
--Part – C
--9. Create Trigger to Automatically Update JoiningDate to Current Date on INSERT if JoiningDate is NULL during an INSERT.
create or alter trigger TR_insert_calculate_age
on PersonInfo
instead of insert
as
begin
	declare @joingDate datetime;
	declare @personid int;
	
	select @personid=PersonId,@joingDate=JoiningDate from inserted	
	if (@joingDate is null)
	begin
		update Personinfo
		set JoiningDate=getdate()
		where PersonId=@personid
	end
end
insert into PersonInfo values(25,'twinkal',20000,null,'rajkot',12,'2005-02-01')
select * from PersonInfo
--10. Create DELETE trigger on PersonLog table, when we delete any record of PersonLog table it prints ‘Record deleted successfully from PersonLog’.
select * from PersonLog
create or alter trigger TR_delete_personLog
on PersonLog
after delete
as
begin	
	print('‘Record deleted successfully from PersonLog’')
end
delete from PersonLog where PLogID=1