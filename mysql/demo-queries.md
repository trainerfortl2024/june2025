## Queries
```sql
show databases;
create database mydb;
show databases;
select database();
use mydb;
select database();
-- id, name, salary
create table employee(id int, name varchar(25),salary int);
describe employee;
drop table employee;
describe employee;
create table employee(id int, name varchar(25),salary int);
describe employee;

-- insert
insert into employee values(101,'ram',1000);

-- select
select id,name,salary from employee;

-- not null
drop table employee;
create table employee(id int not null, name varchar(25),salary int);

insert into employee values(101,'ram'); -- errror
insert into employee values(null,'ram',1000); 
insert into employee(id,name) values(101,'ram'); 
select id,name,salary from employee;
insert into employee(name,salary) values('ram',2000); -- error
select id,name,salary from employee; -- 101... 101... - unique

-- unique
drop table employee;
create table employee(id int not null unique, name varchar(25),salary int);
select * from employee;
insert into employee values (101,'ram',1000);
insert into employee values (null,'krishna',2000); -- error , not null
insert into employee values (101,'krishna',2000); -- error , unique

-- primary key (not null and unique)
drop table employee;
create table employee(id int primary key, name varchar(25),salary int);
select * from employee;
insert into employee values (101,'ram',1000);
select * from employee;
insert into employee values (null,'krishna',2000); -- error , not null
insert into employee values (101,'krishna',2000); -- error , unique


-- Queries - TQL MySQL , Sql Server
-- DDL - create, alter(add,modify,drop column,rename column) , drop , rename  , truncate
-- DML - insert , update, select(DQL) , delete 
-- DCL - commit, rollback, savepoint

-- create database
-- create table 

-- alter table - modify the structure - add, modify , drop , rename
drop table employee;
create table employee(id int, name varchar(20));
desc employee;

alter table employee add salary int;
desc employee;

alter table employee modify name varchar(30);
desc employee;

alter table employee rename column name to ename;
desc employee;

alter table employee drop column salary;
desc employee;


-- rename table
rename table employee to emp;
desc employee;
desc emp;

-- drop table - delete data and structure

-- truncate table - delete data not structure

select * from emp;
desc emp;
insert into emp values(101,'ram'),(102,'krishna');
select * from emp;

truncate table emp;
select * from emp;

drop table emp;
select * from emp;


-- update
create table employee(id int primary key, name varchar(25),salary int);
insert into employee values(101,'ram',1000),(102,'krishna',2000),(103,'shiva',3000);
select * from employee;
update employee set salary = 7000 where id=102;
select * from employee;

-- delete 
delete from employee where id=103;
select * from employee;

-- DCL 
-- delete from employee - DML
-- truncate table employee - DDL

-- DCL  commit, rollback, savepoint - DML operaion 

select * from employee;
commit; -- 2 records
insert into employee values(103,'rama',1000);
update employee set salary = 3000 where id = 103;
select* from employee;

rollback; -- not working as expected because autocommit is enabled
select* from employee;

set autocommit = 0; -- disable autocommit
select * from employee;
commit;
insert into employee values(104,'krishna',4000);
select * from employee;
rollback;
select * from employee;


insert into employee values(105,'krishna2',5000);
savepoint s1; -- 101,102,103, 105

insert into employee values(106,'krishna6',6000);
insert into employee values(107,'krishna7',7000);
savepoint s2; -- 101...103, 105 to 107

insert into employee values(108,'krishna6',8000);
insert into employee values(109,'krishna7',9000);
savepoint s3; -- 101...103, 105 to 107
select * from employee;-- 101,102,103, 105,106,107,108,109

rollback to s2;
select * from employee;-- 101,102,103, 105,106,107
rollback to s1;
select * from employee;-- 101,102,103,105
rollback;
select * from employee;-- 101,102,103

select * from employee;
commit;
select * from employee;
delete from employee; -- DML - rollback
select * from employee;
rollback;
select * from employee;

select @@autocommit;
set autocommit=0;
insert into employee values(101,'ram',1000),(102,'krishna',2000),(103,'shiva',3000);
select * from employee;
commit;
insert into employee values(108,'krishna6',8000);
select * from employee;
delete from employee;
select * from employee;
rollback; -- possible
select * from employee;
truncate table employee;
select * from employee;
rollback; -- not possible
select * from employee;
drop table employee;
select * from employee;

create table employee(id int,name varchar(25),salary int);
alter table employee add primary key(id);
alter table employee modify id int auto_increment;
insert into employee(name,salary)values('rama',1000);
select * from employee;
alter table employee auto_increment = 201;
insert into employee(name,salary)values('rama2',1200);
select * from employee;
insert into employee(name,salary)values('rama3',3000);
select * from employee;
alter table employee add desig varchar(25);
select * from employee;
update employee set desig='Programmer';
select * from employee;
alter table employee alter desig set default 'Developer';
insert into employee(name,salary) values('ganesh',3000);
select * from employee;
```